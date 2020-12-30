<template>
  <div class="login">
    <div class="login-section">
      <h1>Log in</h1>
      <form @submit="login">
        <input type="text" placeholder="E-mail" v-model="email" /><br />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
        /><br />
        <button @click="login">Submit</button>
      </form>
    </div>
    <div class="image-section">
      <img src="https://picsum.photos/350/600/" />
    </div>
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
    login() {
      if (this.email && this.password) {
        this.$store.commit("login", this.email);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.login
  display: flex
  justify-content: center

.login-section
  background: inherit
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.image-section
  background: inherit
  display: flex
  align-items: center

h1
  background: inherit
  padding-bottom: 25px

form
  background: inherit

input
  border: none
  outline: none
  box-shadow: 4px 5px 2px #dddddd
  border-radius: 3px
  margin: 8px 5px
  padding: 3px 6px

button
  border: none
  outline: none
  box-shadow: 4px 5px 2px #dddddd
  border-radius: 3px
  margin: 20px 5px 170px 5px
  align-self: flex-start
  padding: 3px 6px
  background: $secondarytext
  color: $primarybg
  cursor: pointer

img
  box-shadow: 25px 25px $secondarytext
  margin: 0 0 30px 200px
  max-height: 70vh
  border-radius: 3px
</style>