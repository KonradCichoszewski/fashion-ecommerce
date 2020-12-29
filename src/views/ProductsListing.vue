<template>
  <div class="products-list">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  components: {
    Product
  },
  computed: {
    products() {
      console.log("ref");
      let params = this.$route.path.split("/");
      let numeralParams = { group: null, category: null, subcategory: null };
      let headers = this.$store.state.headers;
      let header = null;
      let category = null;
      let subcategory = null;

      console.log("params", params);

      header = headers.find(obj => obj.title === params[1].toUpperCase());

      console.log("header", header);

      numeralParams.group = header.group;

      if (params.length > 3) {
        category = header.categories.find(
          category => category.title.toLowerCase() === params[2]
        );
        numeralParams.category = category.category;
      } else numeralParams.category = null;

      if (params.length > 4) {
        subcategory = category.subcategories.find(
          subcategory => subcategory.title.toLowerCase() === params[3]
        );
        numeralParams.subcategory = subcategory.subcategory;
      } else numeralParams.subcategory = null;

      console.log(numeralParams);

      let products = this.$store.state.products.filter(
        product => product.group === numeralParams.group
      );

      if (numeralParams.category !== null) {
        products = products.filter(
          product => product.category === numeralParams.category
        );
      }

      if (numeralParams.subcategory !== null) {
        products = products.filter(
          product => product.subcategory === numeralParams.subcategory
        );
      }

      return products;
    }
  }
};
</script>

<style lang="sass" scoped>
.products-list
  display: inline-flex
  flex-flow: row wrap
  justify-content: center
  align-items: flex-start
</style>