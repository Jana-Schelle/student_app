const mongoose = require('mongoose');


const db_connection = mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true, useUnifiedTopology: true}, () =>
console.log("connected to DB") );

module.exports = db_connection;