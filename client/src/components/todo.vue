<template>
    <v-app>
        <h1 id="addTodo">Add ToDo</h1>
        <div>
            <v-col cols="6" style="margin: 0px auto;">
            <v-text-field v-model="newTodo" label="Add Todo" solo append-icon="add_box" @click:append="addTodo">
            </v-text-field>
        </v-col>
        </div>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        newTodo: '',
    }),
    methods: {
        addTodo() {
            console.log(this.newTodo);
        }
    }
}
</script>

<style>
#addTodo {
    text-align: center;
}
</style>