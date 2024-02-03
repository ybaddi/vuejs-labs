<template>
  <div class="hello">
    <p
    v-text="text1"
    :class="text1clicked?'red':null"
    @click="text1clicked = !text1clicked"
    ></p>

    <p>{{ getClassText1 }}</p>

    <p
    v-text="text2"
    :class="text2clicked?'blue':null"
    @click="text2clicked = !text2clicked"
    ></p>

    <p>{{ getClassText2 }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
    text1: 'hello',
    text2: 'world',
    text1clicked: false,
    text2clicked: false
  }
},
methods:{
  // getClassText1(){
  //   console.log("class text1 edited");
  //   return this.text1clicked?'class text 1:red':'text 1 no class'
  // }
},

computed:{
  getClassText2(){
    console.log("class text2 edited");
    return this.text2clicked?'class text 2:blue':'text 2 no class'
  },
  getClassText1(){
    console.log("class text1 edited");
    return this.text1clicked?'class text 1:red':'text 1 no class'
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.red{
  color: red;
}
.blue{
  color: blue;
}
</style>
