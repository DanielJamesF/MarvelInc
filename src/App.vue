<template>
  <Navbar />
  <Navbar />
  <router-view />
  <footer-all />
</template>
<script>
import FooterAll from "@/components/FooterAll.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "myApp", // Renaming the app so it won't conflict with the child component
  components: {
    FooterAll,
    Navbar,
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
</style>
