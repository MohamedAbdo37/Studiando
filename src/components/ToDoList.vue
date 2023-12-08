<template>

        <div class="cnt">
            <input id="taskText" type="text" placeholder="Enter your note ... " @keyup.enter="addTask">
            <button  @click="addTask" >add</button>
            <div id="trash" @click="clearTasks"> <i class="fa-solid fa-trash" ></i></div>
        </div>
        <ul class="todoTasks">
            <li v-for="task in tasks">
                <input type="checkbox" name="task"/>
                <label for="task">{{ task }}</label>
            </li>
        </ul>
    
</template>

<script>
export default{
    name: 'ToDoList',
    data(){
        return{
            tasks:[]
        }
    },
    methods:{
        addTask(){
            this.tasks.push(document.getElementById('taskText').value);
            document.getElementById('taskText').value = null;
        },
        clearTasks(){
            this.tasks = [];
        }
    }
}
</script>

<style>
li{
    display: flex;
    justify-content: flex-start;
    align-items:center;
    /* box-shadow: 0px 0px 2px rgb(113, 110, 110); */
    /* border: 1px solid rgba(245, 245, 245, 0.361); */
    background-color: rgba(55, 123, 226, 0.37);
    transform: translate(-10%, 0%);
    font-family: cursive;
    margin: 2.5px;
    max-width: 100%;
    border-radius: 10px;
    padding: 5px;
}
li:hover{
    background-color: rgba(250, 235, 215, 0.616);
}
li input{
    cursor: pointer;
    width:20px;
    height: 20px;
    border-radius: 80%;
    background-color: transparent;
}

li input:checked{
    accent-color: rgb(33, 206, 33);
}
li input:checked~label{
    text-decoration: line-through;
}
li label{
    display: inline-block;
    padding-left: 5px;
    font-size: 20px;
    
}
.todo{
    width: 300px;
    height: 200px;
    background-color: rgb(33, 217, 174);
    border-top-left-radius: 20px;
    transform: translate(410%,100%);
    position: fixed;
    padding: 10px;
    justify-content: space-evenly;
    animation-name: noteSlide;
    animation-duration: 1s; 
}

.todoTasks{
    height: 150px;
    overflow-y: auto;
}

.todo button{
    background-color: rgb(55, 123, 226);
    border: 1px solid;
    transform: translate(20%, -5%);
    height: 30px;
    border-radius: 15px;
}

.todo button:hover{
    background-color: rgb(209, 135, 217);
}
</style>