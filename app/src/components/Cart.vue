<template>
  <div class="cart mb-5">
    <h1 class="mb-2">Shopping cart</h1>

    <div class="cart_head">
      <p class="cart_itemName">
        Наименование
      </p>
      <p class="cart_itemAmount">
        Количество
      </p>
      <p class="cart_itemPrice">
        Цена
      </p>
      <div class="cart_itemColumn">

      </div>
    </div>

    <CartItem v-for="product in shoppingCart" :product="product" :key="product.T" />

  </div>
</template>

<script>
import {mapState} from 'vuex';
import CartItem from "./CartItem";

export default {
  name: "Cart",
  components: {CartItem},
  data: () => ({
    shoppingCart: []
  }),
  computed: {
    ...mapState([
      'cart'
    ])
  },
  watch: {
    cart(newVal, oldVal) {
      this.shoppingCart = newVal ? newVal : oldVal;

      console.warn(newVal, oldVal, 'motherfuck you niggaz');
    }
  }
}
</script>
<style>
  .cart_head {
    display: flex;
    justify-content: space-between;
  }
</style>
