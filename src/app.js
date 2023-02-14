const app = Vue.createApp({

    data(){
         return {
            message: "Vue: Salom  dunyo!",
            toggle: false,
            data: data,
            jsonUrl: "https://jsonplaceholder.typicode.com/posts",
            postList: [],
            loading: false,
            navlinks: [

                {id:4, title:"Dashboard", href: "/#"},
                {id:2, title:"Orders", href: "/#"},
                {id:5, title:"users", href: "/#"},
                {id:6, title:"customers", href: "/#"},
                {id:23, title:"payment", href: "/#"}
                ,
            ],
            x:0,
            y:0,
            tasks: [],
            taskName:"" ,
            taskDeadline: "",
        }     
    },
    computed: {
        filterOnline() {
            return this.data.filter((item) => item.status)
        }
    } ,
    methods: {
        setToggle(){
            this.toggle = !this.toggle
            console.log(this.toggle);
        },
        mouseMove (e){
            this.x = e.clientX
            this.y = e.clientY
            console.log(x, "---> ", y );
        },
        addNewTask () {
            const newTask = {
                id: new Date(),
                deadline:this.taskDeadline,
                title: this.taskName,
                is_done: false
            }
            if(newTask.title.trim().length === 0 || newTask.deadline.trim().length === 0) 
            {
                console.log("please enter a task");
            }else {
                this.tasks.push(newTask);
                console.log(this.tasks);
                this.title = "",
                this.taskDeadline = ""
            }
        },  
    },
    mounted() {
        const getPosts = async () => {
        try {
                const posts = await fetch(this.jsonUrl)
                const result = await posts.json()
                this.postList = result
                loading = true;
            }
            catch (error) {
                console.log(error);
            }
        }
        getPosts();
        console.log(this.postList);
    },
})

app.mount('#root')