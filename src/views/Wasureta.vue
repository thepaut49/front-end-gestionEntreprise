<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <form class="password-form" @submit.prevent="onSubmit">
    <h1>Vous avez oublié votre mot de passe ?</h1>
    <p>
      Entrez votre adresse e-mail ci-dessous et cliquez sur "Envoyer la demande".
      <br />Si vous ne voyez pas notre e-mail, regardez dans votre dossier Spam.
    </p>
    <div class="login">
      <div>
        <label for="mail">Email :</label>
        <input type="text" name="mail" id="mail" v-model="mail" />
      </div>

      <div class="actions">
        <input class="button" type="submit" value="Envoyer la demande" />
      </div>
    </div>

    <label>Nouveau mot de passe : {{ newPassword }}</label>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Wasureta",
  components: {},
  data() {
    return {
      mail: "",
      newPassword: "",
    };
  },
  computed: {},
  methods: {
    onSubmit(p_user) {
      console.log(p_user);

      axios
        .put("http://localhost:5000/wasureta", {
          mail: this.mail,
        })
        .then((response) => {
          console.log(response);
          if (response.data.new_password) {
            this.newPassword = response.data.new_password;
          } else {
            this.newPassword = "";
            alert(response.data.message);
          }
        })
        .catch((error) => {
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