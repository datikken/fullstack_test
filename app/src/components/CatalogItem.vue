<template>
  <v-expansion-panel>
    <v-expansion-panel-header>

      <h3>{{ group_name }}</h3>

      <template v-slot:actions>
        <v-icon color="primary">$expand</v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="category_products">

        <Product v-for="product in items" :product="product" :group="product.G" :key="product.N" />

      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Product from '../components/Product';

export default {
  name: "CatalogItem",
  props: ['group', 'items'],
  components: {
    Product
  },
  data: () => ({
    group_name: null
  }),
  mounted() {
      this.group_name = this.$store.getters.get_group_name_by_id(this.$props.group);
  }
}
</script>

<style scoped>
  .category_products {
    display: flex;
    flex-wrap: wrap;
  }
</style>
