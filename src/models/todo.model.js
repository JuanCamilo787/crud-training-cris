const mongoose = require('mongoose');


var todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    done: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

mongoose.model('Todo', todoSchema);

// module.exports = Todo;