<template>
  <div class="m-login-form">
    <h1>login</h1>
    <m-registretion-form />
  </div>
</template>

<script>
import mRegForm from "./reg-components/m-registration-form.vue";

export default {
  name: "m-login-form",
  components: {
    mRegForm,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>