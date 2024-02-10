<template>
  <div class="container" id="app">
    
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      apiUrl : 'https://jsonplaceholder.typicode.com/todos/1',
      id: '',
      title: '',
      body: '',
      userId: '',
    }
  },
  mounted(){
    axios
    .get(this.apiUrl)
    .then(res => {
      console.log(res);
    })
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
