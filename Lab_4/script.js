

const application = {
    data(){
        return {
            title: "Hello World",
            linkTitle: "my web site",
            lien : "https://baddiyoussef.com",
            image: "images/fleur.jpeg",
            imageTitle: "fleur",
        }
    },

    methods:{
       
    }

}

Vue.createApp(application).mount("#app");