

const application = {
    data(){
        return {
            title: "Hello World",
            km: 0,
        }
    },

    methods:{
       goOn: function(){
        setInterval(()=>{
        this.km +=1;
       }, 1000);
    }
},

beforeCreate(){
    console.log("Application is being created "+this.km);
},
created(){
    console.log("Application is being created "+this.km);
    this.goOn();
}

}

Vue.createApp(application).mount("#app");