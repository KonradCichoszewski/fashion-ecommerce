<template>
  <div class="home">
    <div class="main" @click="scroll">
      <div class="plate">
        <h1>Welcome</h1>
        <h2>to the Vuetyful home of fashion</h2>
      </div>
    </div>
    <div class="description" @click="scroll">
      <div class="text">
        <h1>What makes you Vuetyful?</h1>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          laboriosam, provident aliquid hic odit velit amet sequi ipsum itaque
          rem illo et quo tempora saepe ut dignissimos explicabo molestias qui!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          laboriosam, provident aliquid hic odit velit amet sequi ipsum itaque
          rem illo et quo tempora saepe ut dignissimos explicabo molestias qui!
        </h3>
      </div>
      <div class="image2" />
    </div>
    <div class="description" @click="scroll">
      <div class="image1" />
      <div class="text">
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          laboriosam, provident aliquid hic odit velit amet sequi ipsum itaque
          rem illo et quo tempora saepe ut dignissimos explicabo molestias qui!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          laboriosam, provident aliquid hic odit velit amet sequi ipsum itaque
          rem illo et quo tempora saepe ut dignissimos explicabo molestias qui!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          laboriosam, provident aliquid hic odit velit amet sequi ipsum itaque
          rem illo et quo tempora saepe ut dignissimos explicabo molestias qui!
        </h3>
      </div>
    </div>
    <div class="gallery"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scroll() {
      window.scrollBy({
        top: window.innerHeight - (pageYOffset % window.innerHeight),
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

.plate
  background: #33333355
  display: flex
  flex-direction: column
  align-items: center
  padding: 30px 50px
  transition-duration: .2s
  cursor: pointer
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
  display: flex
  >.text
    padding: 10vw
    >h1
      margin-bottom: 30px
  >.image1
    height: 100vh
    min-width: 40vw
    width: 40vw
    background-image: url("https://picsum.photos/1000/800")
    background-size: cover
    cursor: pointer
  >.image2
    height: 100vh
    min-width: 40vw
    width: 40vw
    background-image: url("https://picsum.photos/1000/801")
    background-size: cover
    cursor: pointer
</style>