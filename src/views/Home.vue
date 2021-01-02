<template>
  <div class="home">
    <div class="main" @click="scroll()">
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
  name: "Home",
  methods: {
    scroll() {
      window.scrollBy({
        top: window.innerHeight - pageYOffset,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  width: 100%
  display: flex
  flex-direction: column

.main
  background-color: $secondarybg
  background-image: url('../assets/mainImage3.jpeg')
  background-size: cover
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer

.plate
  background: #33333355
  display: flex
  flex-direction: column
  align-items: center
  padding: 30px 50px
  transition-duration: .2s
  > *
    background: transparent
    color: white
  > h1
    font-size: 100px
    font-weight: 900
  &:hover
    background: #33333377

.description
  height: 100vh
  background: $secondarybg
</style>