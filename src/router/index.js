import Vue from "vue";
import Router from "vue-router";

import mCatalog from "../components/m-catalog.vue";

import { authNav } from "./authNav";
import { cartNav } from "./cartNav";

Vue.use(Router);

export const routes = [...authNav, ...cartNav];

let router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: mCatalog,
    },
  ],
});

export default router;
