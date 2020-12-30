<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">
      <img class="logo-image" src="@/assets/logo.png" />
      <p class="logo-text">Vuetyful</p>
    </div>
    <div class="categories">
      <router-link class="category" to="/man">MAN</router-link>
      <router-link class="category" to="/woman">WOMAN</router-link>
      <router-link class="category" to="/kids">KIDS</router-link>
    </div>
    <div class="options">
      <router-link class="option" v-if="!$store.state.user.email" to="/login"
        ><h3>Log in</h3></router-link
      >
      <router-link class="option" to="/cart"
        ><img class="cart" src="@/assets/cart.png"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  height: 90px
  align-items: center
  position: sticky
  top: 0
  bottom: calc( 100vh + 150px)
  box-shadow: 0 2px 5px #dddddd
  z-index: 1

.logo
  display: flex
  align-items: center
  margin: 0 150px 0 20px
  cursor: pointer

.logo-image
  height: 60px

.logo-text
  font-size: 2em
  padding-left: 10px

.category
  margin-right: 90px
  text-decoration: none
  color: inherit
  font-weight: bold
  font-size: 1.3em
  letter-spacing: 5px

.options
  flex-grow: 1
  display: flex
  justify-content: flex-end
  align-items: center
  margin-right: 40px

.option
  text-decoration: none
  margin-right: 20px

.cart
  height: 50px
  background: transparent

h3
  margin-right: 20px
</style>