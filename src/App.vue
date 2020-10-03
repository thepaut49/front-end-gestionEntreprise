<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="!current_user" to="/LoginForm">Sign In</router-link>
      <button v-if="current_user" @click="logout">Déconexion</button>
    </div>
    <router-view />
  </div>
</template>

<script>
//import Logout from "./components/Logout.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  data() {
    return {
      user: null,
    };
  },
  computed: {
    ...mapState(["current_user"]),
  },
  methods: {
    ...mapActions(["logUser", "logoutUser"]),
    logout() {
      this.logoutUser();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
