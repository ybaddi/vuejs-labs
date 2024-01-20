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
            title: "ToDo List App",
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

            this.$refs.name.focus();

            //localStorage.setItem('tasks',JSON.stringify(this.tasks));
            
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
    },
    created() {
        this.tasks = localStorage.getItem('tasks') 
        ? JSON.parse(localStorage.getItem('tasks') )
        : this.tasks;
    },

    mounted(){
        this.$refs.name.focus();
    },

    updated(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
};

Vue.createApp(application).mount("#app");