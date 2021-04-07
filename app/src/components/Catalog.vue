<template>
  <div class="catalog">
    <v-expansion-panels>
      <CatalogItem v-for="(items, group) in groups" :group="group" :items="items" :key="items.G"/>
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
    groups: null
  }),
  mounted() {
    this.groups = this.$store.state.groups;
  }
}
</script>
