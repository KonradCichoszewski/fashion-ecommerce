import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import headers from './headers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    cart: null,
    products: null,
    // In production app version, 'headers' would be fetched form the database when the app is initialized
    headers,
    api: {
      base: 'https://5feaebc48ede8b0017ff218f.mockapi.io',
      users: 'https://5feaebc48ede8b0017ff218f.mockapi.io/users',
      products: 'https://5feaebc48ede8b0017ff218f.mockapi.io/products'
    },
  },
  mutations,
  actions,
  modules: {
  }
})
