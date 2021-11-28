import Vue from "vue";

import VueRouter from "vue-router";

import mCatalog from "../components/m-catalog.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: mCatalog,
      meta: {
        title: "Каталог",
      },
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../components/m-cart.vue"),
      props: true,
      meta: {
        title: "Корзина",
      },
    },
  ],
  mode: "history",
});

export default router;