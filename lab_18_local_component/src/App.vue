<template>
  <div  class="container" id="app">
    <ComponentA v-for="(card,index) in 3" :key="index"/>
  </div>
</template>

<script>

import ComponentA from './components/ComponentA.vue'

export default {
  name: 'App',
  components: {
    ComponentA
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
