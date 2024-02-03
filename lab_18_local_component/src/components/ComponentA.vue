<template>
    <div>
        <div class="row d-inline-flex">
            <div class="card" style="width: 18rem;" 
            v-for="(card,index) in 4" :key="index">
                <img src="../assets/fleur.jpeg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
<PrimaryButton label="more details" link="#"/>
                    </p>
                </div>
            </div>

            <!-- <div class="card" style="width: 18rem;">
                <img src="../assets/fleur.jpeg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/fleur.jpeg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="../assets/fleur.jpeg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> -->

        </div>
    </div>
</template>


<script>

import PrimaryButton from './PrimaryButton.vue';

export default{
    name:'ComponentA',
    components:{
        PrimaryButton
    }
}

</script>

<style scoped>
.card{
    margin: 15px;
}
</style>