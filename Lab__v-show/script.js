

const application = {
    data(){
        return {
            title: "Hello World",
        }
    },

    methods:{
       runButton: function(){
        console.log("you clicked on red button")
       },

       runBlueButton: function(){
        console.log("you clicked on blue button")
       },

       runBlackButton: function(){
        console.log("you leaved the black button")
       }
    }

}

Vue.createApp(application).mount("#app");