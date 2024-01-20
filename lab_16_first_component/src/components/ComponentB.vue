<template>
<div>
    <h1>{{  title }}</h1>

    <h3> {{  message }}</h3>
    <button type="button" @click="increment">{{ count }}</button>
</div>
</template>

<script>
export default {
    data(){
        return {
            title: 'My Second Component',
            message: 'the name of our second component is ComponentB',
            count: 0,
        }
    },
    methods:{
        increment: function(){
            this.count++;
        }
    }
}
</script>

<style scoped>
</style>