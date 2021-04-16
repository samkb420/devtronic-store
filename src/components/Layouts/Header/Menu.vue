<template>
   <div class="navbar">
      <ul class="app-nav-list pl-0">
         <li class="app-nav-item mx-1" v-for="(menuItem , key) in menus" :key="key">
				<a  :href="menuItem.path">{{(menuItem.name)}}</a>
				<template v-if="menuItem.type === 'sub_menu'">
					<ul  class="sub-menu" v-if="menuItem.children && menuItem.children.length > 0">
						<li v-for="(subMenuItem , subMenuKey) in menuItem.children" :key="subMenuKey">
							<a :href="subMenuItem.path" :class="[ subMenuItem.type === 'sub_menu' ? 'menu-item-has-children':'']">{{(subMenuItem.name)}}</a>
							<ul class="sub-menu" v-if="subMenuItem.children_menus">
								<li  v-for="(childrenItem , childrenKey) in subMenuItem.children_menus" :key="childrenKey">
									<a :href="childrenItem.path" >{{(childrenItem.name)}}</a>
								</li>
							</ul>
						</li>
					</ul>
				</template>
				<template v-if="menuItem.type === 'mega_menu'">
					<ul class="sub-menu mega">
						<li v-for="(megaitem,megaitemkey) in menuItem.children" :key="megaitemkey">
							<a>{{(megaitemkey)}}</a>
							<ul class="sub-menu">
								<li v-for="(submega,submegakey) in megaitem" :key="submegakey">
									<a :href="{name: 'Products', params: {title:(megaitemkey)}, query: {category: submega.path}}">{{(submega.name)}}</a>
								</li>
								
							</ul>
						</li>
					</ul>
				</template>
         </li>
      </ul>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   computed:{
		...mapGetters(["menus"]),
	},
}
</script>

