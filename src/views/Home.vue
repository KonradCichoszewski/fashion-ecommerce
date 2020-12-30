<template>
  <div class="home">
    <div class="main">
      <h1>Welcome</h1>
      <h2>to the Vuetyful home of fashion</h2>
    </div>
    <div class="description"></div>
    <div class="gallery"></div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="sass" scoped>
.home
  width: 100%
  display: flex
  flex-direction: column

.main
  background-image: url(https://picsum.photos/3500/1500)
  background-size: cover
  height: calc(100vh - 90px)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  > *
    background: transparent
    color: white
  > h1
    font-size: 100px
    font-weight: 900

.description
  height: calc(100vh - 90px)
  background: $secondarybg

.gallery
</style>