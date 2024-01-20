// var tasks = [{
//     name: 'adil',
//     done: false,
// },
// {
//     name: 'adil',
//     done: true,
// }]

const application = {
    data(){
        return {
            tasks: [],
            newTask:{
                done:false,
            },
            errors:[]
           
        }
    },

    methods:{
        addTask: function(){
            // TODO add error
            this.errors=[];
            if(!this.newTask.name){
                this.errors.push("task name is required");
                return false
            }
            
          
            this.tasks.push(this.newTask);
            this.newTask={};
            this.errors=[];
           },
           removeAll:function(){
            if(! confirm('confurm delete all tasks?')){
                return false;
            }
            this.tasks = [];
           },

           deleteTask : function(task){
            if(! confirm('confirm delete all tasks?')){
                return false;
            }
            const newTaskList = this.tasks.filter(item => item !== task);
            this.tasks = newTaskList;
           }
    }
};

Vue.createApp(application).mount("#app");