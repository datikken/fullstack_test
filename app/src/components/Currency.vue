<template>
  <v-text-field
      v-model="usd" @keyup="set_usd_price()"
      class="mt-5"
      label="Type in USD price Mr. Elon"
      placeholder="USD"
      outlined
  ></v-text-field>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Currency",
  data: () => ({
    usd: null
  }),
  computed: {
    ...mapGetters([
      'curr_price_usd'
    ])
  },
  methods: {
    ...mapActions([
        'SET_USD_PRICE'
    ]),
    set_usd_price() {
        this.SET_USD_PRICE(this.usd)
    }
  },
  mounted() {
    this.usd = this.curr_price_usd;
  }
}
</script>
