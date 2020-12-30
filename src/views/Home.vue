<template>
  <div class="home">
    <div class="main">
      <div class="plate">
        <h1>Welcome</h1>
        <h2>to the Vuetyful home of fashion</h2>
      </div>
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
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

.plate
  background: #33333355
  display: flex
  flex-direction: column
  align-items: center
  padding: 30px 50px
  box-shadow: 0 0 1px 1px #33333355
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