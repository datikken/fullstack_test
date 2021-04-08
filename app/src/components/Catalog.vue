<template>
  <div class="catalog">
    <v-expansion-panels>
      <CatalogItem v-for="(items, group) in grouped_products" :group="group" :items="items" :key="group" />
    </v-expansion-panels>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem";

export default {
  name: 'Catalog',
  components: {
    CatalogItem
  },
  data: () => ({
    grouped_products: null
  }),
  mounted() {
    this.grouped_products = this.$store.state.products;
  }
}
</script>
