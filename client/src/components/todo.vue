<template>
    <v-app>
        <h1 id="addTodo" class="white--text">Add ToDo</h1>
        <!-- todo input field -->
        <div>
            <v-col cols="6" style="margin: 0px auto;">
            <v-text-field v-model="newTodo" label="Add Todo" solo append-icon="add_box" @click:append="addTodo" @keyup.enter="addTodo">
            </v-text-field>
        </v-col>
        </div>

        <!-- snackbar -->
        <div class="text-center">
            <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            :color="color"
            :top = true
            >
            {{ text }}
            </v-snackbar>
        </div>

        <!-- uncompleted todos -->
        <div v-for="todo in uncompletedTodos" :key="todo._id">
            <v-card
                class="mx-auto"
                color="white"
                dark
                max-width="800"
            >
                <v-card-text class="font-weight-bold title blue--text" >
                {{ todo.title }}
                <v-list-item id="todo-list-item" class="grow">
                    
                        <v-btn @click="completeTodo(todo._id)" class="mx-2" fab dark small color="green">
                        <v-icon dark>done</v-icon>
                        </v-btn>
                        <v-btn @click="deleteTodo(todo._id)" class="mx-2" fab dark small color="red">
                        <v-icon dark>delete_sweep</v-icon>
                        </v-btn>
                    
                </v-list-item>
                </v-card-text>
            </v-card>
        </div>

        <!-- completed todos -->
        <h1 class="text-center white--text">Completed Todos</h1>
        <div v-for="todo in completedTodos" :key="todo._id">
            <v-card
                class="mx-auto"
                color="blue"
                dark
                max-width="800"
            >
                <v-card-text class="font-weight-bold title white--text" >
                {{ todo.title }}
                <v-list-item id="todo-list-item" class="grow">
                    
                        <v-btn @click="completeTodo(todo._id)" class="mx-2" fab dark small color="green">
                        <v-icon dark>done</v-icon>
                        </v-btn>
                        <v-btn @click="deleteTodo(todo._id)" class="mx-2" fab dark small color="red">
                        <v-icon dark>delete_sweep</v-icon>
                        </v-btn>
                    
                </v-list-item>
                </v-card-text>
            </v-card>
        </div>
    </v-app>
</template>

<script>

import axios from 'axios';

export default {
    data: () => ({
        newTodo: '',
        snackbar: false,
        text: '',
        timeout: 2000,
        color: '',
        uncompletedTodos: [],
        completedTodos: []
    }),
    methods: {
        addTodo() {
            // add todo
            axios.post('http://localhost:8000/todos/add',{
                todo: this.newTodo
            }).then((response) => {
                if(response.data === 'Todo added'){
                    this.color = 'green'
                }else{
                    this.color = 'red'
                }
                this.text = response.data;
                this.snackbar = true
                // fetching uncompleted todos
                axios.get('http://localhost:8000/todos/uncompleted')
                .then(response => (this.uncompletedTodos = response.data))
                .catch(error => console.log(error))
                // fetch completed task
                axios.get('http://localhost:8000/todos/completed')
                .then(response => (this.completedTodos = response.data))
                .catch(error => console.log(error))
                })
                this.newTodo = "";
        },
        completeTodo(todoID){
            console.log(todoID)
            //mark todo as completed
            axios.post('http://localhost:8000/todos/complete/'+todoID,{
                todoID: todoID
            }).then((response) => {
                if(response.data === 'Good Work'){
                    this.color = 'green'
                }else{
                    this.color = 'red'
                }
                this.text = response.data;
                this.snackbar = true
                // fetching uncompleted todos
                axios.get('http://localhost:8000/todos/uncompleted')
                .then(response => (this.uncompletedTodos = response.data))
                .catch(error => console.log(error))
                // fetch completed task
                axios.get('http://localhost:8000/todos/completed')
                .then(response => (this.completedTodos = response.data))
                .catch(error => console.log(error))
        })
        },
        deleteTodo(todoID) {
            // delete todo
            axios.delete('http://localhost:8000/todos/'+todoID)
            .then((response) => {
                if(response.data === 'Todo deleted'){
                    this.color = 'green'
                }else{
                    this.color = 'red'
                }
                this.text = response.data;
                this.snackbar = true
                // fetching uncompleted todos
                axios.get('http://localhost:8000/todos/uncompleted')
                .then(response => (this.uncompletedTodos = response.data))
                .catch(error => console.log(error))
                // fetch completed task
                axios.get('http://localhost:8000/todos/completed')
                .then(response => (this.completedTodos = response.data))
                .catch(error => console.log(error))
                })
        }
    },
    created() {
        // fetch uncompleted task
        axios.get('http://localhost:8000/todos/uncompleted')
        .then(response => (this.uncompletedTodos = response.data))
        .catch(error => console.log(error))
        // fetch completed task
        axios.get('http://localhost:8000/todos/completed')
        .then(response => (this.completedTodos = response.data))
        .catch(error => console.log(error))
    }
}
</script>

<style>
#addTodo {
    text-align: center;
}
.v-card{
    margin-bottom: 20px;
}

#todo-list-item {
    margin: -42px 0px 0px 600px;
}
</style>