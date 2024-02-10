<template>

    <div  class="row d-inline-flex">

        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <input type="text" name="post.title" v-model="post.title" class="form-control" placeholder="Titre">
            </div>
            <br/><br/>
            <div class="form-group">
                <textarea name="post.body" v-model="post.body"  class="form-control" placeholder="Body ..." > </textarea>
            </div>
            <br/><br/>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" > Send </button>
            </div>
        </form>
    </div>

</template>

<script>
export  default {
    name:'PostStore',
    data(){
        return{
            appUrl: "https://jsonplaceholder.typicode.com/posts",
            post:{

            },
            responseData:null,
        }
    },
    methods: {
        onSubmit(){
            if(this.post.title && this.post.body){
                this.responseData=null;
            let body = JSON.stringify({
                userId: 2,
                title: this.post.title,
                body: this.post.body
            })
            this.axios.post(this.appUrl,body)
            .then((res)=>{
                console.log("SUCCESS : ", res.status);
                this.responseData=res.data;
                if(res.status == 201){
                    console.log('Your Post '+ JSON.stringify(this.responseData) +'has been submitted successfully!');
                    this.post={};
                }
            })
            .catch((error)=>{console.log("Error : ", error)})
        }
        }
    }

}
</script>


<style scoped>

</style>