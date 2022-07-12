<template>
  <Navbar />
  <router-view/>
  <footer-all/>
</template>
<script>
import FooterAll from '@/components/FooterAll.vue';
import Navbar from './components/Navbar.vue'

export default {
  name: "myApp", // Renaming the app so it won't conflict with the child component
  components: {
    FooterAll,
    Navbar
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
body{
  background-color: #F8002F;
background-image: linear-gradient(326deg, #F8002F 0%, #000C14 74%);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
