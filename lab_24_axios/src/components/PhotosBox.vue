<template>
<div class="row d-inline-flex">
            <div v-for="(data,index) in responseData" :key="index" class="card"
            style="width: 18rem;">
            <img class="card-img-top" :src="data.thumbnailUrl" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{data.title}}</h5>
                    <a :href="data.url" class="btn btn-primary">Go to photo {{ data.id }}</a>
                </div>
            
</div>
</div>
</template>


<script>
export  default {
    name:'PhotosBox',
    data(){
        return {
            appUrl:'https://jsonplaceholder.typicode.com/photos',
            responseData: null,
            
        }

    }
    ,methods: {
        fetchApi(){
            this.axios.get(this.appUrl)
            .then((res)=> {
                console.log('response : ', res.data);
                this.responseData = res.data;
            }).catch((err)=> {
                console.log('err : ', err);
            })
        }
    },
    mounted(){
        this.fetchApi()
    }

}

</script>


<style scoped>
.card{
    margin: 15px;
}
</style>