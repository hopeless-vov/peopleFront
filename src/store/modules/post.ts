export default {
  mutations: {
    updatePopap(state: { popap: boolean }) {
      state.popap = !state.popap
    }
  },
  state: {
    popap: false
  },
  getters: {
    getPopap(state: { popap: any }) {
      return state.popap
    },
  }
}
