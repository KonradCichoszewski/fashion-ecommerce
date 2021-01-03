<template>
  <div class="product-details">{{ this.product }}</div>
</template>

<script>
export default {
  computed: {
    product() {
      if (this.$store.state.products !== null) {
        return this.$store.state.products.filter(
          product => product.id == this.$route.params.id
        )[0];
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.product-details
  display: inline-flex
  margin-top: 90px
</style>