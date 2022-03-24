<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const token = localStorage.access_token;

    if (token) {
      this.$store.dispatch("getLoggedInUser");
    }

    this.$store.dispatch("getBasicTable");
  },
};
</script>


<style>
body {
  background-color: #14161a;
}
</style>
