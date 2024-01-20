<template>
    <div>

    <h1>{{  title }}</h1>

    <h3> {{  message }}</h3>
</div>

</template>

<script>
export default {
    data(){
        return {
            title: 'My First Component',
            message: 'the name of our first component is ComponentA',
        }
    }
}
</script>

<style scoped>
</style>