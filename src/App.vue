<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <SideMenu v-if="isProduct" />
      <router-view class="view" />
    </div>
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
  computed: {
    isProduct() {
      return (
        this.$route.name === "ProductsListing" ||
        this.$route.name === "ProductDetail"
      );
    }
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
  min-height: calc( 100vh - 90px)

.view
  background: $secondarybg
  flex-grow: 1
</style>
