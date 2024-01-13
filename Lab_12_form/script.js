var users = [{
    firstname: 'adil',
    lastname: 'hicham',
    age:24
},
{
    firstname: 'karim',
    lastname: 'kamal',
    age:27
}]

const application = {
    data(){
        return {
            title: "Hello World",
            users: window.users,
            newUser:{

            },
            errors:[],
        }
    },

    methods:{
       addUser: function(){
        // TODO add error
        this.errors=[];
        if(!this.newUser.firstname){
            this.errors.push("first name is required")
        }
        if(!this.newUser.lastname){
            this.errors.push("last name is required")
        }

        if(!this.newUser.age){
            this.errors.push("age is required")
        }
        if(this.errors.length){
            return false;
        }

        this.users.push(this.newUser);
        this.newUser={};
        this.errors=[];
       }
    }
};

Vue.createApp(application).mount("#app");