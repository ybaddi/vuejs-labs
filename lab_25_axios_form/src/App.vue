<template>
  <div class="container">
    <PostStore />
     <!-- <PhotosBox /> -->
  </div>
 
</template>

<script>
// import PhotosBox from './components/PhotosBox.vue'
import PostStore from './components/PostStore.vue'

export default {
  name: 'App',
  components: {
    // PhotosBox,
    PostStore
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
