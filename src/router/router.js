import Vue from "vue";
import Router from "vue-router";

import mCatalog from "../component/m-catalog";
import mCart from "../components/m-cart";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: mCatalog,
    },
    {
      path: "/cart",
      name: "cart",
      component: mCart,
    },
  ],
});

export default router;
