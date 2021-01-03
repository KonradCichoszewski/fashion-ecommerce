<template>
  <div class="product-details" v-if="waited">
    <img
      :src="'https://picsum.photos/1300/100' + Math.floor(Math.random() * 10)"
      class="image"
    />
    <div class="info">
      <h1>{{ product.title }}</h1>
      <h3>{{ description }}</h3>
      <h3>{{ product.price }}$</h3>
      <div class="options">
        <button
          :disabled="!product.available"
          :class="{ available: product.available }"
          @click="addToCart"
        >
          {{ action }}
        </button>
        <div class="return" @click="$router.go(-1)">Return</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waited: false
    };
  },
  computed: {
    product() {
      if (this.$store.state.products !== null) {
        return this.$store.state.products.find(
          product => product.id === this.$route.params.id
        );
      } else {
        return null;
      }
    },
    description() {
      let description = this.product.description;
      for (let i = 1; description.length < 200; i++) {
        description += " " + this.product.description;
      }
      return description;
    },
    action() {
      if (this.product.available) return "Add to cart";
      else return "Out of stock";
    }
  },
  methods: {
    addToCart() {
      window.alert("Added to cart!");
    }
  },
  mounted() {
    setTimeout(() => {
      this.waited = true;
    }, 1000);
  }
};
</script>

<style lang="sass" scoped>
.product-details
  display: inline-flex
  background-color: orange
  margin-top: 90px

.image
  max-height: calc( 100vh - 90px )
  transition-duration: 0.5s
  &:hover
    transform: scale(1.01, 1.01)

.info
  padding: 25px 40px

h1
  padding-bottom: 50px

h3
  padding-bottom: 50px

.options
  display: flex
  align-items: center
  justify-content: space-between
  padding-right: 50px

button
  border: none
  outline: none
  padding: 15px
  background: #333333
  color: $primarybg
  border-radius: 2px
  font-size: 1.1em
  &.available
    cursor: pointer
    background: green

.return
  padding: 20px
  cursor: pointer
</style>