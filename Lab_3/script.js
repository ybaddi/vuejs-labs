const courses =[
    'java', 'C++', 'Vue.Js','Flutter','Springboot','kotlin'
]

const application = {
    data(){
        return {
            title: "Hello World",
            courses: courses
        }
    },

    methods:{
       
    }

}

Vue.createApp(application).mount("#app");