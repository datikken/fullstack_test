<template>
  <div class="cartItem" v-if="cartItem">
    <div class="cartItem_title">
      {{ cartItem.pr_name }}
    </div>
    <div class="cartItem_amount">
      {{ cartItem.pr_amount }}
    </div>
    <div class="cartItem_price">
      {{ cartItem.pr_price }}
    </div>
    <div class="cartItem_drop">
      <v-icon>
        {{ svgPath }}
      </v-icon>
    </div>
  </div>
</template>

<script>
import {mdiBasketRemove} from "@mdi/js";

export default {
  name: "CartItem",
  props: ["product"],
  data: () => ({
    svgPath: mdiBasketRemove,
    cartItem: null
  }),
  mounted() {
    this.cartItem = this.$props.product;
  }
}
</script>

<style scoped>
.cartItem {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr .5fr;
}
</style>
