<template>
  <div class="NavBar">
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
.NavBar {
  background-color: #567895;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100px;
}
 
</style>