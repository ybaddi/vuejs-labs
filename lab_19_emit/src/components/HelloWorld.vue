<template>
 <div>
<!-- <input type="text" placeholder="tape a value"
@change="$emit('listenChange', $event.target.value)"> -->
<input type="text" placeholder="tape a value" @change="listenChange"/>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    listenChange(event){
      this.$emit("listenChange",event.target.value)
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
</style>
