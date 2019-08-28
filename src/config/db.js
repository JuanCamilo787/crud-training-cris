const mongoose = require('mongoose');
const colors = require('colors');


mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}).then(()=>{
console.log('db connected'.green);
})

require('./../models/todo.model');