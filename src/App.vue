<template>
  <div id="app">
    <Logout v-if="user" :user="user"></Logout>
    <Loginform v-else @login-submitted="logUser"></Loginform>
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
          this.token = "";
          console.log(error);
        });
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
  margin-top: 60px;
}
</style>
