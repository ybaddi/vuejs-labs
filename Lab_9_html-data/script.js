

const application = {
    data(){
        return {
            title: "Hello World",
            textHtml:"<p>hello from js file, Iam an Html Text</p>"
        }
    },

    

}

Vue.createApp(application).mount("#app");