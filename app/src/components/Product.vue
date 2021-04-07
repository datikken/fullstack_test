<template>
  <div class="product">
    <div class="product_content">
      <p class="product_name">{{ prName }}</p>
      <p class="product_amount ml-1">({{ prAmount }}): </p>
      <p class="product_price ml-2">{{ prPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['product', 'group'],
  data: () => ({
    prName: null,
    prAmount: null,
    prPrice: 0
  }),
  mounted() {
    this.namings = this.$store.getters.get_product_namings_by_group_and_id(this.$props.group, this.$props.product.T);
    this.prPrice = parseFloat(this.$store.getters.usd_to_rub(this.$props.product.C).toFixed(2));

    this.prName = this.namings.N;
    this.prAmount = this.$props.product.P;
  }
}
</script>

<style scoped>
.product {
  flex: 50%;
}

.product_content {
  display: flex;
}
</style>
