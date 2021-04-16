<template>
  <v-app>
    <vue-snotify></vue-snotify>    
    <div class="headers">
      <emb-header-v3></emb-header-v3>
    </div>

    <!-- Menu for mobile -->
    <v-navigation-drawer v-model="mobileMenu" temporary absolute dark class="sidebar-bg">
      <emb-sidebar></emb-sidebar>
    </v-navigation-drawer>    
    <router-view></router-view>
    <emb-footer-V1
      title="About Davetronic Company Ltd"
      description="Davetronic Ltd is Your One Stop B2B Distributor / Wholesaler (we ship to over 80 countries ) for the Widest Range of I.T / Computer, Consumer Electronics and Office Products, across all Categories and Brands, Guaranteed Best Prices, Availability and Delivery for Over 2 Million North American, European, Far East and Middle East Models."
      img="/static/images/cards.png"
      >
    </emb-footer-V1>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["rtlLayout"]),
    mobileMenu: {
      get() {
        return this.$store.getters.sidebarOpen;
      },
      set(val) {
        this.$store.dispatch("toggleSidebar", val);
      }
    }
  },
  /**
   * Method To set the Rtl While page is opened
  */
  mounted() {
    if(this.rtlLayout) {
      this.$vuetify.rtl = this.rtlLayout;
    }
  },
  methods: {
    /**
     * Method To Toggle The RTL Layout
     */
    toggleRTLLayout() {
      this.$vuetify.rtl = !this.rtlLayout;
      this.$store.dispatch("changeRtlLayout");
    },
  }
}
</script>