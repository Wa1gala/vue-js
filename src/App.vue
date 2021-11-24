<template>
  <div id="app">
    <about-card />
  </div>
</template>

<script>
import aboutCard from './components/about-card.vue'

export default {
  name: 'App',
  components: {
    aboutCard
  }
}
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
