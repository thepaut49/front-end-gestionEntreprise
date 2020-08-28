<template>
  <div id="app">
    <div v-show="$store.userIsLogged">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div v-show="!$store.userIsLogged">
      <Login></Login>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login
  },
  computed:{
    ...mapState(['userIsLogged','token','current_user'])
  }
}
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
