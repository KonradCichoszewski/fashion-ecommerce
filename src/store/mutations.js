export default {
  saveProducts(state, products) {
    state.products = products
  },

  login(state, email) {
    state.user = {
      email: email,
      authenticated: true
    }
  }
}