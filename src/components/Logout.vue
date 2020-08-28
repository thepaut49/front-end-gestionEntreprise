<template>
  <div class="logout-container">Utilisateur : {{ user.username }}</div>
</template>

<script>
export default {
  name: "Logout",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>