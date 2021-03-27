export const UserModule = {
  // allows us to reference module first within setup of index 
  namespaced: true, 

  state: {
    followers: 0,
    user: null
  },

   // mutations are functions that affect the STATE
   mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },

  // Actions are functions that you call throughout your application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    }
  }
}
