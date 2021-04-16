<template>
	<div class="checkout-wrap">
		<emb-page-title
			heading="Checkout"
		>
		</emb-page-title>
		<div class="section-gap">
			<v-container grid-list-xl py-0>
				<template v-if="cart.length > 0">
					<div class="view-cart mb-12">
						<emb-sidebar-panel></emb-sidebar-panel>
					</div>
					<v-layout row wrap mt-4>
						<v-flex xs12 sm12>
							<div class="emb-card pa-6">
								<div >
									<h4>User Sign In</h4>
									<v-form>
										<v-text-field	required	type="email" placeholder="Email*"></v-text-field>
										<v-text-field	required	type="password" placeholder="Password*"></v-text-field>
										<div class="d-flex align-center justify-space-between">
											<v-checkbox v-model="checkbox" label="Remember Me"></v-checkbox>
											<router-link to="/session/forgot-password" class="text-lg-right mb-1">Forgot Password ?</router-link>
										</div>
										<v-btn class="accent mb-4 ml-0 mx-0" large to="/checkout/final-receipt">
											Sign In
										</v-btn>
										<p>Don't Have account? <router-link to="/session/signup">Click here to create One</router-link></p>
									</v-form>
								</div>
							</div>
						</v-flex>
						
					</v-layout>
				</template>
				<template v-else>
					<div class="text-center">
						<div class="mb-6">
							<img  alt="cart-empty" height="128" src="static/images/empty-cart.png" width="128">
						</div>
						<h4 > Your Shopping Cart is empty.</h4>
						<router-link class="primary--text" to="/">Add products</router-link>
					</div>
				</template>
			</v-container>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data(){
		return{
			checkbox: false
		}
	},
	computed: {
		...mapGetters(["cart"]),
	},
}
</script>