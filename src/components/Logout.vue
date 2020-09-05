<template>
  <form @submit.prevent="onSubmit">
    <input class="button" type="submit" value="Déconnexion" />
  </form>
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
  methods: {
    onSubmit() {
      this.$emit("logout-submitted");
    },
  },
};
</script>

<style>
</style>