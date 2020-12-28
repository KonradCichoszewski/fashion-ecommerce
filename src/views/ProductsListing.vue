<template>
  <div class="products-list">
    <!-- <div>{{ $route.params.category }}</div> -->
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/components/Product";

export default {
  components: {
    Product
  },
  data() {
    return {
      products: null
    };
  },
  created() {
    axios
      .get(this.$store.state.api.products)
      .then(response => (this.products = response.data))
      .catch(error => console.error(error));
  }
};
</script>

<style lang="sass" scoped>
.products-list
  display: inline-flex
  flex-flow: row wrap
  justify-content: center
</style>