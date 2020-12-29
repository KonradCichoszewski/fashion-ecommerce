<template>
  <div class="login">
    <h1>Log in</h1>
    <input type="text" placeholder="E-mail" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="login">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login() {}
  }
};
</script>

<style lang="sass" scoped>
</style>