const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require("./config/mongo_connect");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//import route files
let todo = require('./routes/todo')

app.use('/todo',todo)


// Home Route
app.get('/', (req, res) =>{
    res.send("Server working properly");
});

app.listen(8000, () => {
    console.log("Server started running on Port 8000");
});