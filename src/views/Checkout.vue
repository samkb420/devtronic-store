<template>
   <div class="emb-FinalReceipt-wrap" v-if="loggedInUser">
      <emb-page-title	heading="Checkout"></emb-page-title>
      <div class="final-receipt  section-gap">
         <v-container grid-list-xl py-0>
            <v-layout align-center justify-center>
               <v-flex xs12 sm12 md10 lg7 xl7>
                  <div class="emb-card pb-12">
                     <div  id="payment-receipt">

                        <div class="py-sm-12 py-8 px-sm-6 px-4">
                           
                           <div class="py-6 text-center bg-grey px-3">
                              <h4>Complete Your Purchase</h4>
                              <h3>{{ `${loggedInUser.first_name} ${loggedInUser.last_name}` }}</h3>
                           </div>
                           <h4 class="pt-6">Your Ordered Details</h4>
                           <template v-for="(cart, index) in cart">
                              <div class="layout row wrap align-center d-flex my-0 text-md-left text-center" v-if="cart"  :key="index">
                                 <v-flex xs12 sm12 md3 lg3 xl3>
                                    <img alt="cart Image" width="100" :src="cart.image">
                                 </v-flex>
                                 <v-flex xs12 sm4 md3 lg3 xl3>
                                    <h6>Product Name</h6>
                                    <p class="mb-0 font-weight-bold">{{cart.name}}</p>
                                 </v-flex>   
                                 <v-flex xs6 sm4 md3 lg3 xl3>
                                    <h6>Quantity</h6>
                                    <p class="mb-0" >{{cart.quantity}}</p>
                                 </v-flex>
                                 <v-flex xs6 sm4 md3 lg3 xl3>
                                    <h6>Price</h6>
                                    <p class="mb-0" ><emb-currency-sign /> {{cart.price}}</p>
                                 </v-flex>
                              </div>
                           </template>
                           <v-divider class="my-4"></v-divider>
                           <div>
                              <div class="d-flex align-center justify-space-between mt-4 mb-4">
                                 <div><p class="mb-0">Subtotal</p></div>
                                 <div><span><emb-currency-sign /> {{itemTotal()}}</span></div>
                              </div>
                              <div class="d-flex align-center justify-space-between mb-4">
                                 <p class="mb-0">Shipping</p>
                                 <span><emb-currency-sign /> {{shipping}}</span>
                              </div>
                              <div class="d-flex align-center justify-space-between mb-4">
                                 <p class="mb-0">Tax</p>
                                 <span><emb-currency-sign /> {{tax}}</span>
                              </div>
                           </div>
                                    <v-divider class="my-4"></v-divider>
                                    <div class="d-flex align-center justify-space-between">
                                        <h4>Total</h4>
                                        <h4><emb-currency-sign /> {{getTotalPrice()}}</h4>
                                    </div>
                        </div>
                     </div>
                     <div class="layout row wrap pt-6 px-4 text-center">
                                <v-flex xs12 sm6 md6 lg6 xl6 text-md-left>
                            <!-- <v-btn class="secondary" :to="{ name: 'cart' }" large>Back</v-btn> -->
                                </v-flex>
                                <v-flex align-self-end xs12 sm6 md6 lg6 xl6 text-md-right>
                                    <v-btn @click.stop.prevent="submit" class="accent" large>Complete Purchase</v-btn>
                                </v-flex>
                     </div>
                  </div>
               </v-flex>
            </v-layout>
         </v-container>
      </div>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapGetters(["tax", "shipping", "userDetails", "cart", "loggedInUser"])
  },
  data() {
    return {}
  },
  methods: {
     submit(){
            this.loadingForm = true
            this.$http.post('/customer/orders/create', { items: this.cart }).then(response => {
                this.$snotify.success(response.data.message, {
                    closeOnClick: false,
                    pauseOnHover: false,
                    timeout: 1000,
                    showProgressBar:false,
                });
                this.loadingForm = false
            }).catch((error) => {
                this.loadingForm = false
                this.$snotify.error(error.message, {
                    showProgressBar:false,
                });
                this.errorForm = error
            })
        },
    /**
     * this function returns the delivery date
     **/
    deliveryDate() {
      let format = "MMMM Do , YYYY";
      let startdate = moment().format(format);
      var new_date = moment(startdate, format).add(5, "days");
      return new_date.format(format);
    },
    /**
     * this function returns the total for the item
     **/
    itemTotal() {
      let productTotal = 0;
      if (this.cart && this.cart.length > 0) {
        for (const item of this.cart) {
          productTotal += item.price * item.quantity;
        }
        return productTotal.toFixed(2);
      } else {
        return productTotal;
      }
    },
    /**
     * this function returns the total price
     **/
    getTotalPrice() {
      let totalPrice = this.tax + this.shipping;
      if (this.cart && this.cart.length > 0) {
        for (const item of this.cart) {
          totalPrice += item.price * item.quantity;
        }
        return totalPrice.toFixed(2);
      } else {
        return totalPrice.toFixed(2);
      }
    }
  }
};
</script>
