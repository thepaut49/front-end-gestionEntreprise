<template>
  <form class="password-form" @submit.prevent="onSubmit">
    <h1>Connexion</h1>
    <div class="login">
      <div>
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" name="username" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password" v-model="password" />
      </div>

      <div class="actions">
        <input class="button" type="submit" value="Se connecter" />
        <a href="/forgot">Mot de passe oublié</a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Loginform",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      let error = "";
      if (this.username === "") {
        error += "Le nom d'utilisateur doit être renseigné !\n";
      }
      if (this.password === "") {
        error += "Le mot de passe doit être renseigné !\n";
      }
      if (error != "") {
        alert(error);
        return;
      }

      let user = {
        username: this.username,
        password: this.password,
      };
      console.log(user);
      this.$emit("login-submitted", user);

      this.username = "";
      this.password = "";
    },
  },
  computed: {},
};
</script>

<style>
app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}

body {
  padding-top: 20%;
}

h1,
.login {
  width: 80%;
  margin: 0 auto;
}

@supports (display: flex) {
  body {
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1,
  .login,
  .account,
  .contact {
    margin: 0;
    width: 80%;
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: 80%;
    align-content: center;
    align-items: stretch;
  }
  @media (min-width: 650px) {
    body {
      grid-template-columns: repeat(2, minmax(150px, 30%));
    }
    h1,
    .login {
      grid-column-end: span 2;
      width: auto;
    }
    .login > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
    }
    .login > div.actions {
      grid-template-columns: 1fr 1fr 1fr;
    }
    input[type="submit"] {
      grid-column: 2;
    }
    .actions a {
      justify-self: end;
    }
  }
}

h1 {
  background-color: rgba(191, 216, 227, 0.8);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 10px;
  font-size: 24px;
  line-height: 1.4;
}

.login {
  background-color: rgba(191, 216, 227, 0.4);
  border: 1px solid rgba(191, 216, 227, 0.8);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.login > div {
  padding: 5px 0;
}

input[type="submit"] {
  border: 1px solid rgba(191, 216, 227, 0.8);
  border-radius: 5px;
  color: #fff;
  background-color: rgb(54, 134, 169);
  font-size: 110%;
}

input[type="text"],
input[type="password"] {
  border: 1px solid rgba(191, 216, 227, 0.8);
  padding: 5px;
  border-radius: 5px;
  font-size: 110%;
  width: 100%;
}

.actions a {
  font-size: 80%;
}
</style>