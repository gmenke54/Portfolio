import { createStore } from 'vuex';

export default createStore({
  state: {
    mode: 'dark'
  },
  mutations: {
    setMode(state, payload) {
      state.mode = payload;
    }
  },
  actions: {},
  modules: {}
});
