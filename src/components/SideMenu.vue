<template>
  <div class="side">
    <div class="wrapper">
      <div
        class="header"
        v-for="header in $store.state.headers"
        :key="header.title"
      >
        <p @click="selectedGroup = header.title">
          {{ header.title }}
        </p>
        <div
          v-show="header.title === selectedGroup"
          class="category"
          v-for="category in header.categories"
          :key="category.title"
        >
          <p
            @click="
              $router.push(
                '/' +
                  header.title.toLowerCase() +
                  '/' +
                  category.title.toLowerCase() +
                  '/'
              )
            "
          >
            {{ category.title }}
          </p>
          <div
            class="subcategory"
            v-for="subcategory in category.subcategories"
            :key="subcategory.title"
          >
            <p
              @click="
                $router.push(
                  '/' +
                    header.title.toLowerCase() +
                    '/' +
                    category.title.toLowerCase() +
                    '/' +
                    subcategory.title.toLowerCase() +
                    '/'
                )
              "
            >
              {{ subcategory.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedGroup: "MAN"
    };
  }
};
</script>

<style lang="sass" scoped>
.side
  min-width: 230px
  display: flex
  flex-direction: column
  height: calc( 100vh - 90px)
  background: #e5e5e5
  position: sticky
  top: 90px
  transition-duration: 0.3s
  &:hover
    background: #d9d9d9

.wrapper
  background: transparent
  padding: 20px 30px
  transition-duration: 0.2s
  &:hover
    >div .category
      transform: translateX(15px)

    >div .subcategory
      transform: translateX(30px)

.header
  font-size: 1.2em
  font-weight: bold
  background: transparent
  padding: 15px 0

.category
  font-size: 1em
  background: transparent
  padding-top: 4px
  transition-duration: 0.2s

.subcategory
  font-size: 0.9em
  background: transparent
  padding-top: 4px
  transition-duration: 0.5s

p
  background: transparent
  cursor: pointer
  transition-duration: 0.08s
  &:hover
    color: white
</style>