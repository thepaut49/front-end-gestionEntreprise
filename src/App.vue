<template>
  <div id="app">
    <div id="nav" v-if="user">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <Logout :user="user" @logout-submitted="logoutUser"></Logout>
    </div>
    <router-view />

    <Loginform v-if="!user" @login-submitted="logUser"></Loginform>
  </div>
</template>

<script>
import Loginform from "./components/Loginform.vue";
import Logout from "./components/Logout.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Loginform,
    Logout,
  },
  data() {
    return {
      user: null,
    };
  },
  computed: {},
  methods: {
    logUser(p_user) {
      console.log(p_user);

      this.errorLogin = "";
      axios
        .get("http://localhost:5000/login", {
          auth: {
            username: p_user.username,
            password: p_user.password,
          },
        })
        .then((response) => {
          console.log(response);
          let token = response.data.token;
          this.user = {
            username: p_user.username,
            password: p_user.password,
            token: token,
          };
          console.log(this.user);
        })
        .catch((error) => {
          this.user = null;
          console.log(error);
        });
    },
    logoutUser() {
      this.user = null;
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
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
