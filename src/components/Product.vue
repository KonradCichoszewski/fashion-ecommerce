<template>
  <div class="product">
    {{ product }}
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style lang="sass" scoped>
.product
  display: inline-flex
  flex-direction: column
  align-items: center
  background: white
  border-radius: 3px
  margin: 20px 30px
  padding: 15px
  width: 280px
  word-break: break-word
  box-shadow: 2px 4px 3px #dddddd
</style>