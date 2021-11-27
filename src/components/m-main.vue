<template>
  <div class="m-main">
     <keep-alive><!-- Сохранение состояния при смене url -->
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "m-main",
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.m-main {
  max-width: 600px;
  margin: 0 auto;
}
</style>
