<template>
  <div class="container" id="app">
    <h1>{{ title.toUpperCase() }}</h1>
    <p>{{ body }}</p>
    <p>Post ID : {{ id  }}</p>
    <p>User: {{ userId }}</p>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      apiUrl : 'https://jsonplaceholder.typicode.com/posts/2',
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
      this.title=res.data.title;
      this.id=res.data.id   ;
      this.body=res.data.body;
      this.userId=res.data.userId;
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
