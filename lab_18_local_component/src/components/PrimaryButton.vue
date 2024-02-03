<template>
    <div>
        <a :href="link" class="btn btn-primary">{{label}}</a>
    </div>
</template>


<script>


export default{
props:{
    label:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    }
}
}

</script>


<style scoped>

</style>