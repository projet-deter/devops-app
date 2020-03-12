import Vue from "vue";
import Router from "vue-router";

import HomePageVue from "../components/pages/HomePage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageVue
    }
  ]
});

export default router;
