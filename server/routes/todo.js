const express = require('express');

const router = express.Router();

let todoModel = require('../models/todo');

// Routes

// fetch uncompleted todo
router
    .route('/uncompleted')
    .get((req, res) => {
        todoModel.find({completed:false},(err, todos) => {
            if(err){
                res.send("Error while fetching Todos");
            }else{
                res.json(todos)
            }
        })
    });

// fetch completed todo
router
    .route('/completed')
    .get((req, res) => {
        todoModel.find({ completed: true }, (err, todos) => {
            if (err) {
                res.send("Error while fetching Todos");
            } else {
                res.json(todos)
            }
        })
    });

// add new todo
router
    .route('/add')
    .post((req, res) => {
        let newTodo = new todoModel;
        newTodo.title = req.body.todo;
        newTodo.completed = false;
        console.log(newTodo);
        newTodo.save((err) => {
            if(err){
                console.log(err);
                res.send("Error while adding Todo");
            }else{
                console.log(newTodo);
                res.send("Todo added");
            }
        })
    })

// update todo as completed
router
    .route('/complete/:id')
    .post((req, res) => {
        console.log(req.params.id)
        todoModel.findByIdAndUpdate(req.params.id, {completed: true}, (err, todo) =>{
            if(!err){
                res.send("Good Work");
            }
        })
    })

// delete todo
router
    .route('/:id')
    .delete((req, res) => {
        let query = { _id: req.params.id }
        todoModel.remove(query, (err) => {
            if(err){
                res.send("Error while deleting todo")
            }else{
                res.send("Todo deleted")
            }
        })
    })

module.exports = router;