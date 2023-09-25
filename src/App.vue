<template>
  <div id="app">
    <AppNav />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppNav from "./components/Navbar/AppNav.vue";
import AppFooter from "./components/Footer/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppFooter,
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
