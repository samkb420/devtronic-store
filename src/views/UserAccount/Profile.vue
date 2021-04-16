<template>
   <div class="profile-wrapper emb-card pa-4">
      <h4>Profile Information</h4>
      <div class="pt-4">
         <div class="proflie-field mb-4">
            <label>First Name: </label>
            <span>{{ loggedInUser.first_name }}</span>
         </div>
         <div class="proflie-field mb-4">
            <label>Last Name: </label>
            <span>{{ loggedInUser.last_name }}</span>
         </div>
         <div class="proflie-field mb-4">
            <label>Phone Number: </label>
            <span>{{ loggedInUser.phone_number }}</span>
         </div>
         <div class="proflie-field mb-4">
            <label>Email Address: </label>
            <span>{{ loggedInUser.email_address }}</span>
         </div>
         <router-link :to="{name: 'EditProfileInfo', query: {type: 'info'}}" > <v-btn class="accent mx-0">Edit</v-btn> </router-link>
      </div>
   </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
   computed: {
		...mapGetters(["userDetails", "loggedInUser"]),
	},
}
</script>