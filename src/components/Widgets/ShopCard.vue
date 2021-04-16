<template>
   <div class="emb-shop-card-v2 section-gap title-gap py-4">
     <div class="container-fluid">
			<div class="sec-title text-center">
				<h3 class="mt-0 mb-1">{{secTitle}}</h3>
			</div>
			<div class="text-center">
					<router-link v-for="(brand,key) in data" :key="key" to="/products" class="ma-2">
              <img width="80" height="30" :src="brand.url"  :alt="brand.name">
					</router-link>
				</div>
     </div>
   </div>
</template>

<script>
/* eslint-disable */
import Slick from "vue-slick";
import { mapGetters } from "vuex";

export default {
  props: ["data", "secTitle"],
  computed: {
    ...mapGetters(["rtlLayout"])
  },
  components: { Slick },
  data() {
    return {
      slickOptions: {
        rtl: this.rtlLayout,
        slidesToShow: 5,
        infinite: true,
        swipe: true,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
             slidesToShow: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 375,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
      }
    };
  }
};
</script>