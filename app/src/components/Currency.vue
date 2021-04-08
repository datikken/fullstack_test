<template>
  <v-text-field
      v-model="usd" @keyup.enter="set_usd_price()"
      :rules="[rules.required, rules.valMin, rules.valMax]"
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
    usd: null,
    rules: {
      required: value => !!value || 'Required.',
      valMin: value => value >= 20 || 'USD should be above $20',
      valMax: value => value <= 80 || 'USD should not be above $80',
    }
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
