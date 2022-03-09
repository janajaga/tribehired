// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";
import Home from "./views/Home";
import Posts from "./views/Posts";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/todos", name: "Posts", component: Posts }
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
