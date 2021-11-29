import Vue from "vue";
import Router from "vue-router";

import mCatalog from "../components/m-catalog.vue";

Vue.use(Router);

let router = new Router({

  routes: [
    {
      path: "/",
      name: "home",
      component: mCatalog,
      meta: {
        title: "Catalog",
        layout: "main-layout",
      },
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../components/m-cart.vue"),
      props: true,
      meta: {
        title: "Cart",
        layout: "auth-layout",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/log-reg-form/m-login-form.vue"),
      meta: {
        title: "Вход",
        layout: "auth-layout",
      },
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import("../components/log-reg-form/m-reg-form.vue"),
      props: true,
      meta: {
        title: "Регистрация",
        layout: "auth-layout",
      },
    },
  ],
  mode: "history",
});

// router.beforeEach((to, from, next) => {

//   const {Token} = localStorage;
//   if (Token || to.name === 'login' || to.name === 'registration'){
//     next();
//   } else{
//     next('/login')
//   }
// })


export default router;
