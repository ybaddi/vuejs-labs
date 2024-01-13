const application = {
    data(){
        return {
            title: "Hello World",
            message: "Ma premiere application web avec framwork Vue.Js",
            width : 200, 
            hight: 300
        }
    },

    methods:{
        hello: function(){
            return "hello world";
        },
        hello1: function(){
            return "hello world from hello 1";
        },
        calculeCarreSurface: function(cote){
            return cote * cote ;
        },
        calculeRectangleSurface: function(){
            return this.width * this.hight ;
        }
    }

}

Vue.createApp(application).mount("#app");