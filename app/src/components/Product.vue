<template>
  <div class="product">
    <div class="product_content">

      <div class="product_info">
        <p class="product_name">{{ prName }}</p>
        <p class="product_amount ml-1">({{ prAmount }}): </p>
        <p class="product_price ml-2" :class="{ border_green: isFailed, border_red: isRaised }">{{ prPrice }} руб</p>
      </div>

      <div class="product_cta ml-5" @click="toCart()">
        <v-icon>{{ svgPath }}</v-icon>
      </div>

    </div>
  </div>
</template>

<script>
import { mdiCart } from '@mdi/js'
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: "Product",
  props: ['product'],
  data: () => ({
    prName: null,
    prAmount: null,
    prPrice: 0,
    svgPath: mdiCart,
    isRaised: false,
    isFailed: false
  }),
  computed: {
    ...mapState([
        'usd'
    ]),
    ...mapGetters([
      'usd_to_rub'
    ])
  },
  methods: {
    ...mapActions([
        'ADD_PRODUCT_TO_CART'
    ]),
    calc_price(price) {
      return parseFloat(this.usd_to_rub(price).toFixed(2));
    }
  },
  watch: {
    usd(newVal, oldVal) {
      this.prPrice = this.calc_price(this.$props.product.pr_price);

      if(newVal >= oldVal) {
        this.isRaised = true
        this.isFailed = false
      } else {
        this.isFailed = true
        this.isRaised = false
      }
    }
  },
  mounted() {
    this.prName = this.$props.product.pr_name;
    this.prPrice = this.calc_price(this.$props.product.pr_price);
    this.prAmount = this.$props.product.pr_amount;
  }
}
</script>

<style scoped>
.product {
  flex: 50%;
}
.product_content, .product_info {
  display: flex;
}
.product_cta {
  cursor: pointer;
}
.border_red {
  border-bottom: 2px solid red;
}
.border_green {
  border-bottom: 2px solid green;
}
</style>
