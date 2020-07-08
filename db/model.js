const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    nationality:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('students', postSchema);