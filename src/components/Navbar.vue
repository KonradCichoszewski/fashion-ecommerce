<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/"
        ><div class="logo-wrapper">
          <img class="logo" src="@/assets/logo.png" />
          <h3 class="logo-text">Vuetyful</h3>
        </div></router-link
      >
    </div>
    <div class="categories">
      <router-link class="category" to="/man">MAN</router-link>
      <router-link class="category" to="/woman">WOMAN</router-link>
      <router-link class="category" to="/kids">KIDS</router-link>
    </div>
    <div class="options">
      <router-link class="option" v-if="!$store.state.user" to="/login"
        >Log in</router-link
      >
      <router-link class="option" to="/cart">Cart</router-link>
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
  height: 60px
  margin: 0 5px 0 20px

.logo-text
  margin-right: 100px
  font-size: 2em

.logo-wrapper
  display: flex
  align-items: center

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
  margin-right: 30px

.option
  text-decoration: none
  margin-right: 20px
</style>