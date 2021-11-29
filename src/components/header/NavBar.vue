<template>
  <div id="NavBar">
    <div class="link-wrapper">
      <div class="nav-links">
        <router-link exact to="/login">Логин </router-link>
        <router-link exact to="/registration">Регистрация</router-link>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
#navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: purple;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
}
.link-wrapper {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 700px;
  padding: 12px 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}
</style>