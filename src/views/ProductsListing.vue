<template>
  <div class="products-list">
    <transition-group name="fade" class="transition">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </transition-group>
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
      let params = this.$route.path.split("/");
      let numeralParams = { group: null, category: null, subcategory: null };
      let headers = this.$store.state.headers;
      let header = null;
      let category = null;
      let subcategory = null;

      header = headers.find(obj => obj.title === params[1].toUpperCase());

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

      if (this.$store.state.products !== null) {
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
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.products-list
  padding-top: 90px

.transition
  background: transparent
  display: inline-flex
  flex-flow: row wrap
  justify-content: center
  width: 100%

.fade-enter-active
  transition: all 1s

.fade-leave-active
  transition: all 1s

.fade-leave-to
  opacity: 0
  transform: scale(0.97, 0.97)

.fade-enter
  opacity: 0
  transform: scale(0.97, 0.97)
</style>