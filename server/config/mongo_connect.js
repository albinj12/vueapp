const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myday", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

// check connection
db.on('open', () => {
    console.log('Connected to mongoDB');
});

db.on('error', (error) => {
    console.log(error)
})