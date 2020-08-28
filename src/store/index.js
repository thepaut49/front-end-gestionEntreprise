import { createStore } from 'vuex'

export default createStore({
  state: {
    userIsLogged: false,
    current_user:{},
    token: ''
  },
  mutations: {
    LOGIN(state, current_user, token){
      state.userIsLogged = true
      state.current_user = current_user
      state.token = token
      console.log(state.userIsLogged)
    }
  },
  actions: {
  },
  modules: {
  }
})
