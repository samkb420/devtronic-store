<template>
	<div class="shop-content-wrap">
		<div class="shop-header">
			<!-- <v-layout row wrap my-0 align-center>
				<v-flex xs12 sm12 md12 lg7 xl7 py-0 cpx-7 mb-4>
					<div class="d-sm-flex">
						<div class="app-selectbox-sm">
							<ais-sort-by
							  :items="[
								 { value: 'ikea', label: 'Default' },
								 { value: 'ikea_price_asc',label: 'Lowest price'},
								 { value: 'ikea_price_desc',  label: 'Highest price'},
							  ]"
							/>
						</div>
						<div class="app-selectbox-sm ml-sm-4 mt-sm-0 mt-6">
							<ais-hits-per-page
							  :items="[
										{ label: '8 results per page', value: 8, default: true },
										{ label: '12 results per page', value: 12},
										{ label: '15 results per page', value: 16 },
									]"
							  />
						</div>
					</div>
				</v-flex>
				<v-flex xs12 sm12 md12 lg5 xl5 cpx-7 py-0 pr-0 mb-4>
					<div class="text-lg-right">
						<ais-stats></ais-stats>
					</div>
				</v-flex>
			</v-layout> -->
		</div>
		<!-- <ais-hits class="mb-4" :results-per-page="9">
        <template slot="item" slot-scope="{ item }">
          <product-item :data="item "></product-item>
        </template>
      </ais-hits> -->
          <div class="row">
			  <product-item class="col-sm-4 col-lg-4" v-for="(item, i) of items" :key="i" :data="item "></product-item>
		  </div>

		<!-- <div class="pagination-wrap pt-2">
			<ais-pagination class="mb-6" :classNames="{
					'ais-pagination': 'pagination',
					'ais-pagination__item': 'pagination__item',
					'ais-pagination__item--active': 'pagination__item--active accent',
					'ais-pagination__item--previous': 'pagination__navigation',
					'ais-pagination__item--next': 'pagination__navigation',
					'ais-pagination__item--disabled': 'disabled'
				}" v-on:page-change="onPageChange" />
		</div> -->
	</div>
</template>

<script>
	import ProductItem from "./ProductItem";

	export default {
		data() {
			return {
				items: []
			}
		},
		created() {
			this.getItems()
		},
		components: {
			ProductItem
		},
		methods: {
			getItems() {
				this.loadingTable = true
				this.errorTable = null
				this.$http.get('/customer/products?category=' + this.$route.params.category + '&subcategory=' + (this.$route.params.subcategory || '')).then(response => {
					this.loadingTable = false
					this.items = response.data.data
				}).catch((error) => {
					this.loadingTable = false
					this.errorTable = error
				})
			},
			// getItems() {
			// 	this.items = [{"name":"LEGITIM","type":"Chopping board, white","price":1.49,"description":"","image":"http://www.ikea.com/us/en/images/products/legitim-chopping-board-white__0119427_PE275744_S4.JPG","ikea_id":"90202268","share_count":31625,"rating":5,"materials":["Polyethylene"],"colors":[],"sizes":["13 ½x9 ½\""],"category":"Cooking","sub_category":"Cooking > Knives & chopping boards","objectID":"509665190","_snippetResult":{"description":{"value":"","matchLevel":"none"}},"_highlightResult":{"name":{"value":"LEGITIM","matchLevel":"none","matchedWords":[]},"type":{"value":"Chopping board, white","matchLevel":"none","matchedWords":[]},"description":{"value":"","matchLevel":"none","matchedWords":[]},"category":{"value":"Cooking","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Cooking > Knives & chopping boards","matchLevel":"none","matchedWords":[]}}},{"name":"RODD","type":"Floor lamp base, black","price":25,"description":"","image":"http://www.ikea.com/us/en/images/products/rodd-floor-lamp-base-black__0120136_PE276562_S4.JPG","ikea_id":"70192406","share_count":31625,"rating":5,"materials":["EVA plastic","Cast iron, Acrylic coating","Steel, Acrylic coating"],"colors":[],"sizes":[],"category":"Lighting","sub_category":"Lighting > Shades, bases & cords","objectID":"509659230","_snippetResult":{"description":{"value":"","matchLevel":"none"}},"_highlightResult":{"name":{"value":"RODD","matchLevel":"none","matchedWords":[]},"type":{"value":"Floor lamp base, black","matchLevel":"none","matchedWords":[]},"description":{"value":"","matchLevel":"none","matchedWords":[]},"category":{"value":"Lighting","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Lighting > Shades, bases & cords","matchLevel":"none","matchedWords":[]}}},{"name":"JÄRA","type":"Lamp shade, white","price":11.99,"description":"Create your own personalized pendant or table lamp by combining the lamp shade with your choice of cord set or lamp base.","image":"http://www.ikea.com/us/en/images/products/jara-lamp-shade-white__0331375_PE522995_S4.JPG","ikea_id":"50206211","share_count":31625,"rating":5,"materials":["Steel, Powder coating","PET plastic, 100 % polyester"],"colors":["Gray","White"],"sizes":["13\"","18\"","22\"","9\""],"category":"Lighting","sub_category":"Lighting > Shades, bases & cords","objectID":"509659090","_snippetResult":{"description":{"value":"Create your own personalized pendant or table lamp by combining","matchLevel":"none"}},"_highlightResult":{"name":{"value":"JÄRA","matchLevel":"none","matchedWords":[]},"type":{"value":"Lamp shade, white","matchLevel":"none","matchedWords":[]},"description":{"value":"Create your own personalized pendant or table lamp by combining the lamp shade with your choice of cord set or lamp base.","matchLevel":"none","matchedWords":[]},"category":{"value":"Lighting","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Lighting > Shades, bases & cords","matchLevel":"none","matchedWords":[]}}},{"name":"GRUNDTAL","type":"Hanger for door, stainless steel","price":9.99,"description":"Hanging storage helps you to convert unused space into a storage place.","image":"http://www.ikea.com/us/en/images/products/grundtal-hanger-for-door__0209200_PE362809_S4.JPG","ikea_id":"50226780","share_count":31625,"rating":5,"materials":["Stainless steel"],"colors":[],"sizes":[],"category":"Small storage","sub_category":"Small storage > Hooks & hangers","objectID":"509657040","_snippetResult":{"description":{"value":"Hanging storage helps you to convert unused space into a","matchLevel":"none"}},"_highlightResult":{"name":{"value":"GRUNDTAL","matchLevel":"none","matchedWords":[]},"type":{"value":"Hanger for door, stainless steel","matchLevel":"none","matchedWords":[]},"description":{"value":"Hanging storage helps you to convert unused space into a storage place.","matchLevel":"none","matchedWords":[]},"category":{"value":"Small storage","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Small storage > Hooks & hangers","matchLevel":"none","matchedWords":[]}}},{"name":"BOHOLMEN","type":"Colander, black","price":2.99,"description":"The colander is designed to rest evenly on the edges of the bowl.","image":"http://www.ikea.com/us/en/images/products/boholmen-colander-black__0122322_PE278601_S4.JPG","ikea_id":"30202544","share_count":31625,"rating":4,"materials":["Polypropylene"],"colors":[],"sizes":["6x17\""],"category":"Kitchen & appliances","sub_category":"Kitchen & appliances > Kitchen faucets & sinks","objectID":"509644710","_snippetResult":{"description":{"value":"The colander is designed to rest evenly on the edges","matchLevel":"none"}},"_highlightResult":{"name":{"value":"BOHOLMEN","matchLevel":"none","matchedWords":[]},"type":{"value":"Colander, black","matchLevel":"none","matchedWords":[]},"description":{"value":"The colander is designed to rest evenly on the edges of the bowl.","matchLevel":"none","matchedWords":[]},"category":{"value":"Kitchen & appliances","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Kitchen & appliances > Kitchen faucets & sinks","matchLevel":"none","matchedWords":[]}}},{"name":"POTATISCHIPS GRÄDDFIL & LÖK","type":"Sour cream and onion potato chips","price":1.69,"description":"Serve as a snack with your favorite dip, as a barbecue side dish, or with food at any time.","image":"http://www.ikea.com/us/en/images/products/potatischips-graddfil-lok-sour-cream-and-onion-potato-chips__79438_PE203428_S4.JPG","ikea_id":"80129669","share_count":31625,"rating":4,"materials":[],"colors":[],"sizes":[],"category":"Food","sub_category":"Food > Candy, chocolates & snacks","objectID":"509639410","_snippetResult":{"description":{"value":"Serve as a snack with your favorite dip, as a","matchLevel":"none"}},"_highlightResult":{"name":{"value":"POTATISCHIPS GRÄDDFIL & LÖK","matchLevel":"none","matchedWords":[]},"type":{"value":"Sour cream and onion potato chips","matchLevel":"none","matchedWords":[]},"description":{"value":"Serve as a snack with your favorite dip, as a barbecue side dish, or with food at any time.","matchLevel":"none","matchedWords":[]},"category":{"value":"Food","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Food > Candy, chocolates & snacks","matchLevel":"none","matchedWords":[]}}},{"name":"ROSTAD LÖK","type":"Fried onion","price":1.99,"description":"Yellow onions are used both as a spice and as a vegetable. Serve with hot dogs or hamburgers.","image":"http://www.ikea.com/us/en/images/products/rostad-lok-fried-onion__0143725_PE304943_S4.JPG","ikea_id":"30237176","share_count":31625,"rating":4,"materials":[],"colors":[],"sizes":[],"category":"Food","sub_category":"Food > Sauces, jam & condiments","objectID":"509639120","_snippetResult":{"description":{"value":"Yellow onions are used both as a spice and as","matchLevel":"none"}},"_highlightResult":{"name":{"value":"ROSTAD LÖK","matchLevel":"none","matchedWords":[]},"type":{"value":"Fried onion","matchLevel":"none","matchedWords":[]},"description":{"value":"Yellow onions are used both as a spice and as a vegetable. Serve with hot dogs or hamburgers.","matchLevel":"none","matchedWords":[]},"category":{"value":"Food","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Food > Sauces, jam & condiments","matchLevel":"none","matchedWords":[]}}},{"name":"TÅRTA CHOKLADKROKANT","type":"Almond cake,chocolate/butterscotch","price":5.99,"description":"An almond cake with chocolate, butter cream and butterscotch. Serve as a dessert with coffee or tea. This product is gluten free.","image":"http://www.ikea.com/us/en/images/products/tarta-chokladkrokant-almond-cake-chocolate-butterscotch__0285556_PE422522_S4.JPG","ikea_id":"60212481","share_count":31625,"rating":5,"materials":[],"colors":[],"sizes":[],"category":"Food","sub_category":"Food > Pastries, desserts & cookies","objectID":"509638990","_snippetResult":{"description":{"value":"An almond cake with chocolate, butter cream and butterscotch. Serve","matchLevel":"none"}},"_highlightResult":{"name":{"value":"TÅRTA CHOKLADKROKANT","matchLevel":"none","matchedWords":[]},"type":{"value":"Almond cake,chocolate/butterscotch","matchLevel":"none","matchedWords":[]},"description":{"value":"An almond cake with chocolate, butter cream and butterscotch. Serve as a dessert with coffee or tea. This product is gluten free.","matchLevel":"none","matchedWords":[]},"category":{"value":"Food","matchLevel":"none","matchedWords":[]},"sub_category":{"value":"Food > Pastries, desserts & cookies","matchLevel":"none","matchedWords":[]}}}]
			// },
			onPageChange() {
				window.scrollTo(0, 0);
			}
		}
	};
</script>