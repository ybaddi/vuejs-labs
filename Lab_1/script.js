const application = {
    data(){
        return {
            title: "Hello World",
            message: "Ma premiere application web avec framwork Vue.Js"
        }
    }

}

Vue.createApp(application).mount("#app");