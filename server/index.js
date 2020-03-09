const express = require('express');

const app = express();


// Home Route
app.get('/', (req, res) =>{
    res.send("Server working properly");
});

app.listen(8000, () => {
    console.log("Server started running on Port 8000");
});