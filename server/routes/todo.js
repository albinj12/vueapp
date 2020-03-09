const express = require('express');

const router = express.Router();

let todoModel = require('../models/todo');

// Routes

// get todos
router
    .route('/all')
    .get((req, res) => {
        
    });

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

module.exports = router;