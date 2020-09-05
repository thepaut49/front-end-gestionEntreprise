<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
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
