<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />

        <h1>Super store</h1>
      </div>
    </v-app-bar>

    <v-main class="pl-5 pr-5 mt-2">

      <Currency />
      <Cart />

      <Catalog />

    </v-main>
  </v-app>
</template>

<script>
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Currency from "./components/Currency";

export default {
  name: 'App',

  components: {
    Currency,
    Catalog,
    Cart
  },

  data: () => ({

  }),
};
</script>
