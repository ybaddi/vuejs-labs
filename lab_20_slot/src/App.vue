<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SuperButton>
Submit
    </SuperButton>

    <super-button>
    </super-button>

    <super-button>
      <span style="background-color: #F55;">click here</span>
      <IconeButton></IconeButton>
    </super-button>


    <HeaderMenu>
      <template v-slot:alert>
        <div class="alert alert-success">
          Message d'alert
        </div>
      </template>
    </HeaderMenu>

</template>

<script>
import SuperButton from './components/SuperButton.vue';
import IconeButton from './components/IconeButton.vue'
import HeaderMenu from './components/HeaderMenu.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    SuperButton,
    IconeButton,
    HeaderMenu
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
