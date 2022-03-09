<template>
  <div id="app">
    <navigation :posts="posts" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import axios from "axios";

export default {
  name: "App",
  components: {
    navigation: Navigation,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => (this.posts = response.data));
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2em;
}
</style>
