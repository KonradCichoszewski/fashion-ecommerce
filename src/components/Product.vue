<template>
  <div class="product" v-if="image">
    <div class="no-image">
      <img :src="image" class="image" />
    </div>
    <h3 class="title">{{ product.title }}</h3>
    <div class="info">
      <p class="available">
        {{ product.available ? "In stock" : "Out of stock" }}
      </p>
      <p class="price">{{ product.price }}$</p>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    image() {
      return "https://picsum.photos/" + Math.floor(Math.random() * 10 + 280);
    },
    description() {
      let description = this.product.description;
      for (let i = 1; description.length < 70; i++) {
        description += " " + this.product.description;
      }
      return description;
    }
  }
};
</script>

<style lang="sass" scoped>
.product
  display: inline-flex
  flex-direction: column
  background: white
  border-radius: 3px
  margin: 20px 30px
  width: 280px
  word-break: break-word
  box-shadow: 8px 10px 2px #dddddd
  transition-duration: 0.23s
  cursor: pointer
  min-height: 430px
  &:hover
    transform: translateY(-3px) translateX(-1px)
    box-shadow: 12px 15px 9px #dddddd

.no-image
  display: inline-block
  width: 0
  height: 280px

.image
  max-width: 280px
  border-radius: 3px 3px 0 0

.title
  padding: 7px 3px

.info
  display: flex
  justify-content: space-evenly
  padding: 0

.description
  padding: 10px 15px
  word-break: break-all
  font-style: italic
</style>