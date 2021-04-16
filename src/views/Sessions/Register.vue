<template>
	<div class="emb-register-wrap section-gap">
		<div class="container py-0">
			<v-layout row wrap align-center justify-center>
				<v-flex sm12 md12 lg8 xl7>
					<v-layout row mx-sm-0 mx-3  wrap align-center justify-center>
						<v-flex sm6 md7 lg6 xl6 hidden-sm-and-down>
							<div class="form-img register-image"></div>
						</v-flex>
						<v-flex sm10 md5 lg6 xl6>
							<div class="emb-card sign-in-form form-margin d-block white pa-6">
								<h4>Create Your Account</h4>
								<formError :error="errorForm" />
								<v-form ref="form" v-model="valid">
									<v-text-field
										type="text"
										v-model="form.first_name"
										placeholder="First Name*"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										type="text"
										v-model="form.last_name"
										placeholder="Last Name*"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										type="text"
										v-model="form.phone_number"
										placeholder="Phone Number*"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										type="email"
										v-model="form.email_address"
										placeholder="Email*"
										:rules="emailRules"
									>
									</v-text-field>
									<v-text-field
										type="password"
										v-model="form.password"
										placeholder="Enter Password*"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										class="mb-4"
										type="password"
										v-model="form.password_confirmation"
										placeholder="Retype Password*"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-btn v-if="!loadingForm" class="accent mx-0 mb-4" large  @click.stop.prevent="register">
										Sign Up
									</v-btn>
									<v-btn v-else class="accent mx-0 mb-4" large disabled>
										Sending request...
									</v-btn>
									<p>Already have account? then<router-link to="/session/signin" class="accent--text"> Sign In</router-link></p>
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
/* eslint-disable */
export default{
   	data () {
      	return {
			form: {},
			loadingForm: false,
			errorForm: null,
         	valid: false,
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+/.test(v) || 'E-mail must be valid'
      		],
          	inputRules: {
               basictextRules: [v => !!v || 'This field should not be empty']
            }
		}
	},
	methods: {
		register(){
			this.$refs.form.validate();
			if(this.valid == true){
				this.loadingForm = true
				this.$http.post('/customer/register', this.form).then(response => {
					this.$store.dispatch('setLoggedInUser', response.data.data)
					this.$snotify.success(response.data.message, {
						closeOnClick: false,
						pauseOnHover: false,
						timeout: 1000,
						showProgressBar:false,
					});
					this.loadingForm = false
					this.$router.push({ name: "checkout" })
				}).catch((error) => {
					this.loadingForm = false
					this.$snotify.error(error.message, {
						showProgressBar:false,
					});
					this.errorForm = error
				})
			}
		}
	}
}
</script>