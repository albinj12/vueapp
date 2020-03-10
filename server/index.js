const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require("./config/mongo_connect");
const expressValidator = require("express-validator");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Express validator middleware
app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;

    while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
    }
    return {
        param : formParam,
        msg : msg,
        value :value
    };
    }
}));

//import route files
let todo = require('./routes/todo');
let event = require('./routes/event');

app.use('/todos', todo)
app.use('/events', event)


// Home Route
app.get('/', (req, res) =>{
    console.log('Home page');
});

app.listen(8000, () => {
    console.log("Server started running on Port 8000");
});