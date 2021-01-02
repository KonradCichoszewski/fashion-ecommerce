<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <SideMenu v-if="this.$route.meta.side" />
      <router-view class="view" />
    </div>
    <!-- <button class="return" @click="scroll" /> -->

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    SideMenu
  },
  created() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box
  background-color: $primarybg
  color: $primarytext

#app
  font-family: Poiret One, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.content
  display: flex
  position: relative
  min-height: 100vh

.view
  background: $secondarybg
  flex-grow: 1

.return
  position: fixed
  bottom: 300px
  right: 300px
  height: 20px
  width: 20px
  border-radius: 10px
  background-color: red
  z-index: 3
</style>
