import { createStore } from 'vuex';
import { UserModule } from './User'

export default createStore({
  // // initially file has below: 
  // state: {
  //   user: null
  // },

  // // mutations are functions that affect the STATE
  // mutations: {
  //   SET_USER(state, user) {
  //     state.user = user;
  //   }
  // },

  // // Actions are functions that you call throughout your application that call mutations
  // actions: {
  //   setUser({ commit }, user) {
  //     commit('SET_USER', user);
  //   }
  // },

  
  // split up state, mutations, actions (above) into separate files (helps maintain large code base)
  // keep state, mutations, and actions (even if empty)
  state: {},
  mutations: {},
  actions: {},  
  modules: {
    User: UserModule
  }
})
