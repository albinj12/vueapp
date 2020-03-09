<template>
    <v-app>
        <h1 id="addTodo">Add ToDo</h1>
        <div>
            <v-col cols="6" style="margin: 0px auto;">
            <v-text-field v-model="newTodo" label="Add Todo" solo append-icon="add_box" @click:append="addTodo">
            </v-text-field>
        </v-col>
        </div>
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
        color: ''
    }),
    methods: {
        addTodo() {
            axios.post('http://localhost:8000/todo/add',{
                todo: this.newTodo
            }).then((response) => {
                if(response.data === 'Todo added'){
                    this.color = 'green'
                }else{
                    this.color = 'red'
                }
                this.text = response.data;
                this.snackbar = true})
        }
    },
}
</script>

<style>
#addTodo {
    text-align: center;
}
</style>