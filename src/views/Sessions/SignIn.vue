<template>
	<div class="emb-signIn-wrap section-gap">
		<div class="container py-0">
			<v-layout row wrap align-center justify-center>
				<v-flex sm12 md12 lg8 xl7>
					<v-layout row mx-sm-0 mx-3 wrap align-center justify-center>
						<v-flex sm6 md7 lg6 xl6 hidden-sm-and-down>
							<div class="form-img sign-in-image"></div>
						</v-flex>
						<v-flex sm10 md5 lg5 xl6>
							<div class="emb-card sign-in-form form-margin d-block white pa-6">
								<h4>Customer Sign In</h4>
								<v-form>
									<formError :error="errorForm" />

									<v-text-field type="email" v-model="form.username" placeholder="Email*"></v-text-field>
									<v-text-field type="password" v-model="form.password" placeholder="Password*"></v-text-field>
									<div class="layout align-center justify-space-between">
										<v-checkbox v-model="checkbox" label="Remember Me"></v-checkbox>
										<router-link to="/session/forgot-password" class=" text-lg-right">Forgot
											Password ?</router-link>
									</div>

									<v-btn v-if="!loadingForm" class="accent ma-0 mb-3" large  @click.stop.prevent="login">
										Sign In
									</v-btn>
									<v-btn v-else class="accent mx-0 mb-4" large disabled>
										Sending request...
									</v-btn>

									<p>Don't Have account? <router-link to="/session/signup" class="accent--text">Click here to create one</router-link>
									</p>
								</v-form>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				checkbox: true,
				form: {},
				loadingForm: false,
				errorForm: null,
			}
		},
		methods: {
			login() {
				this.loadingForm = true
				this.$http.post('/users/login', this.form).then(response => {
					this.$store.dispatch('setLoggedInUser', response.data.data)
					this.$snotify.success(response.data.message, {
						closeOnClick: false,
						pauseOnHover: false,
						timeout: 1000,
						showProgressBar: false,
					});
					this.loadingForm = false
					this.$router.push({
						name: "checkout"
					})
				}).catch((error) => {
					this.loadingForm = false
					this.$snotify.error(error.message, {
						showProgressBar: false,
					});
					this.errorForm = error
				})
			}
		}
	}
</script>