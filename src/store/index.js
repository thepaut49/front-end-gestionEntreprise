import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    current_user: null,
  },
  mutations: {
    LOGIN(state, current_user) {
      state.current_user = {
        username: current_user.user.username,
        token: current_user.user.token,
      };
      console.log(current_user);
      console.log("LOGIN");
      console.log(state.current_user);
    },
    LOGOUT(state) {
      state.current_user = null;
    },
  },
  actions: {
    logUser(context, p_user) {
      context.commit("LOGIN", p_user);
    },
    logoutUser(context) {
      context.commit("LOGOUT");
      router.push("/");
    },
  },
  modules: {},
});
