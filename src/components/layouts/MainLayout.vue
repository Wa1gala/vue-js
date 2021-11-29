<template>
  <div class="main-layout">
    <NavBar />
    <h2 class="page-title"></h2>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/header/NavBar";



export default {
  name: "AuthLayout",
  components: {
    NavBar,
  },
};
</script>

<style>
.main-layout {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>