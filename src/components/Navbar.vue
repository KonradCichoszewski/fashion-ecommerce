<template>
  <div class="navbar" :class="{ dark: $route.name === 'Home', hidden: hidden }">
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
      <h3
        class="option"
        v-if="!$store.state.user.email"
        @click="$router.push('/login')"
      >
        Log in
      </h3>
      <h3 v-else class="option" @click="$store.commit('logout')">Log out</h3>
      <router-link v-if="!$route.name === 'Home'" class="option" to="/cart"
        ><img class="cart" src="@/assets/cart.png"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: false,
      lastPageYOffset: 0
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > this.lastPageYOffset) this.hidden = true;
      else this.hidden = false;
      this.lastPageYOffset = window.pageYOffset;
    }
  },
  watch: {
    currentRoute() {
      if (this.currentRoute === "Home")
        window.addEventListener("scroll", this.handleScroll);
      else window.removeEventListener("scroll", this.handleScroll);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  height: 90px
  align-items: center
  position: fixed
  top: 0
  box-shadow: 0 2px 5px #99999944
  z-index: 1
  transition-duration: 0.6s
  width: 100%
  &.dark
    background: #33333355
    color: white
    height: 60px
    box-shadow: none
    position: fixed
    > div > img
      height: 40px
    &.hidden
      transform: translateY(-60px)
    &:hover
      background: #33333399

.logo
  display: flex
  align-items: center
  margin: 0 150px 0 20px
  cursor: pointer
  background: transparent,
  color: inherit

.logo-image
  height: 60px
  background: transparent,
  color: inherit

.logo-text
  font-size: 2em
  padding-left: 10px
  background: transparent,
  color: inherit

.categories
  background: transparent
  color: inherit

.category
  margin-right: 90px
  text-decoration: none
  color: inherit
  font-weight: bold
  font-size: 1.3em
  letter-spacing: 5px
  background: transparent
  color: inherit

.options
  flex-grow: 1
  display: flex
  justify-content: flex-end
  align-items: center
  margin-right: 40px
  background: transparent
  color: inherit

.option
  text-decoration: none
  margin-right: 20px
  background: transparent
  color: inherit

.cart
  height: 50px
  background: transparent

h3
  margin-right: 30px
  cursor: pointer
</style>