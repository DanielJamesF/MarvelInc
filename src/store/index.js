import { createStore } from 'vuex'

export default createStore({
  state: {
    items: ''
  },
  getters: {
    getItems (state) {
      return state.items
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
