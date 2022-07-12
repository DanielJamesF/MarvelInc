<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
  <router-view/>
  <footer-all/>
</template>
<script>
import FooterAll from '@/components/FooterAll.vue';

export default {
  name: "myApp", // Renaming the app so it won't conflict with the child component
  components: {
    FooterAll
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
