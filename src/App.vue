<template>
  <div id="app">
    <component :is="layout">
      <m-main />
    </component>
  </div>
</template>

components\layouts\AuthLayout

<script>
import mMain from "./components/m-main";
import MainLayout from "./components/layouts/MainLayout.vue";
import AuthLayout from "./components/layouts/AuthLayout.vue";

export default {
  name: "App",
  components: {
    mMain,
    MainLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta?.layout
    },
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
  margin-top: 60px;
}
</style>
