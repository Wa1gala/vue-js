import Vue from "vue";
import Router from "vue-router";

import mCatalog from "../components/m-catalog.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: mCatalog,
      meta: {
        title: "Catalog"
      }
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../components/m-cart.vue"),
      props: true,
      meta: {
        title: "Cart"
      }
    },
  ],
  mode: 'history'
});

export default router;
