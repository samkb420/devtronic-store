//----------------| Ecommerce Module |------------------//
import router from "../../../router";
import moment from 'moment';

const state = {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
      tax: 0,
      shipping: 0,
      invoiceData: {
            products: [],
            orderId: '',
            transactionId: '',
            orderedDate: '',
            delevieryDate: '',
      }
}

// getters
const getters = {
      cart: state => {
            return state.cart;
      },
      wishlist: state => {
            return state.wishlist;
      },
      tax: state => {
            return state.tax;
      },
      shipping: state => {
            return state.shipping;
      },
      invoiceData: state => {
            return state.invoiceData;
      },
      cartItem: state => {
            return state.cartItem;
      },
      indexOfItem: state => {
            return state.indexOfItem;
      }
}

// actions
const actions = {
      addProductToCart(context, payload) {
            context.commit('onAddProductToCart', payload);
      },
      onDeleteProductFromCart(context, payload) {
            context.commit("onDeleteProductFromCart", payload);
      },
      changeQuantityHandler(context, payload) {
            context.commit('onChangeQuantityHandler', payload);
      },
      addItemToWishlist(context, payload) {
            context.commit('onAddItemToWishlist', payload);
      },
      onDeleteProductFromWishlist(context, payload) {
            context.commit("onDeleteProductFromWishlist", payload);
      },
      onPrintFinalReceipt(context, payload) {
            context.commit("onPrintFinalReceipt", payload);
      },
      addAllWishlistItemToCart(context) {
            context.commit("addAllWishlistItemToCart");
      },
      makePayment(context, payload) {
            context.commit('makePayment', payload);
      }
}

// mutations
const mutations = {
      onAddProductToCart(state, payload) {
            let newProduct = {
                  id: payload.objectID,
                  product_id: payload.objectID,
                  image: payload.image,
                  name: payload.name,
                  price: payload.price,
                  quantity: payload.quantity || 1,
                  total: payload.price
            }
            state.cart.push(newProduct);
            saveCartToLocalStorage();
      },
      /**
       * method for deleting product to cart
      */
      onDeleteProductFromCart(state, payload) {
            let index = state.cart.indexOf(payload);
            state.cart.splice(index, 1);
            saveCartToLocalStorage();
      },

      /**
       * method for adding item to wishlist
      */
      onAddItemToWishlist(state, payload) {
            let newItem = {
                  id: payload.objectID,
                  product_id: payload.objectID,
                  image: payload.image,
                  name: payload.name,
                  price: payload.price,
                  quantity: payload.quantity || 1,
                  total: payload.price
            }

            state.wishlist.push(newItem);
            saveWishlistToLocalStorage();
      },
      /**
       * method for deleting item from wishlist
      */
      onDeleteProductFromWishlist(state, payload) {
            let index = state.wishlist.indexOf(payload);
            state.wishlist.splice(index, 1);
            saveWishlistToLocalStorage();
      },

      /**
       * method for adding all wishlist item to cart
      */
      addAllWishlistItemToCart(state) {
            if (state.wishlist && state.wishlist.length > 0) {
                  for (const wishlistItem of state.wishlist) {
                        state.cart.push(wishlistItem);
                  }
            }

            saveCartToLocalStorage();
            state.wishlist = [];
            saveWishlistToLocalStorage();
      },
      /**
       * method to calcualte Order Id , transcation Id, ordered date , delivery date 
      */
      makePayment(state, products) {
            state.invoiceData.products = products;
            state.invoiceData.orderId = '312134645432132132',
                  state.invoiceData.transactionId = new Date().getTime() - 10000,
                  state.invoiceData.orderedDate = moment().format('MMMM DD, YYYY'),
                  state.invoiceData.deliveryDate = moment().add(5, 'days').format('MMMM DD, YYYY')
            state.cart = [];
            router.push('/checkout/final-receipt')
      }
}

function saveCartToLocalStorage() {
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
}

function saveWishlistToLocalStorage() {
      window.localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
}

export default {
      state,
      getters,
      actions,
      mutations
}
