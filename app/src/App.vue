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

    <v-main>
      <Catalog/>
    </v-main>
  </v-app>
</template>

<script>
import Catalog from './components/Catalog';

export default {
  name: 'App',

  components: {
    Catalog,
  },

  data: () => ({
    //
  }),
};
</script>
