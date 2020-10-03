<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="Profil" v-if="current_user">
      <div>
        <p>Nom d'utilisateur : {{current_user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: null,
    };
  },
  computed: {
    ...mapState(["current_user"]),
  },
  methods: {},
};
</script>
