<template>
  <div class="products-list">
    <Product
      v-for="product in this.$store.state.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  components: {
    Product
  },
  computed: {
    group() {
      // let group = this.$route.full
      return "chuj";
    }
  }
};
</script>

<style lang="sass" scoped>
.products-list
  display: inline-flex
  flex-flow: row wrap
  justify-content: center
</style>