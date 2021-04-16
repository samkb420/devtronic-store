import Vue from 'vue'
import Router from 'vue-router'

import userRoutes from './user';
import adminRoutes from './admin';
const NotFound = () => import('Views/NotFound.vue');
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		userRoutes,
		adminRoutes,
		{ 
			path: '*',
			component: NotFound, 
			name:'NotFound'
		},
	]
})

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {

	// Check if auth is required on this route
	// (including nested routes).
	const authRequired = routeTo.matched.some((route) => route.meta.authRequired)
  
	// If auth isn't required for the route, just continue.
	if (!authRequired) return next()
  
	// If auth is required and the user is logged in...
	if (store.getters['loggedIn']) {
	  return next()      
	}
  
	// If auth is required and the user is NOT currently logged in,
	// redirect to login.
	redirectToLogin()
  
	// eslint-disable-next-line no-unused-vars
	function redirectToLogin() {
	  // Pass the original route to the login component
	  next({ name: 'Register', query: { redirectFrom: routeTo.fullPath } })
	}
  })
  
export default router
