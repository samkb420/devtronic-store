<template>
	<div class="emb-gadget-wrap">
		<emb-page-title :heading="heading">
		</emb-page-title>
		<div class="gadget-content section-gap">	
			<ais-instant-search :search-client="searchClient" index-name="ikea">
				<v-container grid-list-xl py-0>
					<v-layout row wrap>
						<!-- <v-flex xs12 sm12 md4 lg3 xl3>
							<emb-sidebar-filters></emb-sidebar-filters>
						</v-flex> -->
						<v-flex xs12 sm12>
							<product-items></product-items> 
						</v-flex>
					</v-layout>
			</v-container>
		</ais-instant-search>
		</div>	
	</div>
</template>

<script>
/* eslint-disable */
import AppConfig from "Constants/AppConfig";
import ProductItems from "Components/Ecommerce/ProductItems";
import SidebarFilters from 'Components/Ecommerce/SidebarFilters'
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';

export default {
	components:{
		embSidebarFilters:SidebarFilters,
		ProductItems
	},
	data(){
		return{
			searchClient: algoliasearch(
         	'latency',
				AppConfig.algoliaApiKey	
			),
		}
	},
	computed: {
		heading() {
			return (this.$route.params.title || this.$route.name)
			.split("-")
			.join(" ")
			.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())

		}
	}
}
</script>