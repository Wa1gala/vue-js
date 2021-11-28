<template>
  <div id="app">
    <m-main/>
  </div>
</template>

<script>

import mMain from './components/m-main'


export default {
  name: 'App',
  components: {

    mMain,
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
