<template>
  <div class="cartItem">
    <div class="cartItem_title">

    </div>
    <div class="cartItem_amount">

    </div>
    <div class="cartItem_price">

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
    console.log(this.$props.product,'cartItem')
  }
}
</script>

<style scoped>

</style>
