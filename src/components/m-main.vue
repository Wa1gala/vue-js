<template>
  <div class="m-main">
    <h1>{{ title }}</h1>
    <m-catalog />
    <m-cart />
  </div>
</template>

<script>
import mCatalog from "./m-catalog";
import mCart from "./m-cart.vue";

export default {
  name: "m-main",
  components: {
    mCatalog,
    mCart,
  },
  props: {},
  data() {
    return {
      title: "Main",
    };
  },
  methods: {},
  mounted() {
    console.log("Hello!");
  },
};
</script>

<style>
.m-main {
  max-width: 600px;
  margin: 0 auto;
  display: inline-block;
}
</style>
