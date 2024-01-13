

const application = {
    data(){
        return {
            title: "Hello World",
            km: 0,
            end:10,
        }
    },

    methods:{
       goOn: function(){
        setInterval(()=>{
        this.km +=1;
       }, 1000);
    }
},

watch:{
    km: function(){
        if (this.km == this.end) {
            this.km = 0;
            console.log("alert the km is on end value");
            alert("alert the km is on end value");
        }
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