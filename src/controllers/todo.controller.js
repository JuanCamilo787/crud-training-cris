const express = require('express');
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

/**
 * @description this function create an todo item
 */

module.exports.createTodo = (req, res)=>{
    let todo = new Todo(req.body);
    todo.save().then(doc => {
       return res.send(doc)
    }).catch(err => {
        return res.send(err)
    })
}

module.exports.getTodos = (req, res)=>{
    Todo.find(req.body).then(doc => {
       return res.send(doc)
    }).catch(err => {
        return res.send(err)
    })
}

module.exports.getTodoById = (req, res)=>{
    Todo.findById(req.params.id).then(doc => {
       return res.send(doc)
    }).catch(err => {
        return res.send(err)
    })
}

module.exports.deleteTodos = (req, res)=>{
    Todo.remove(req.body, (err, doc)=>{
        if (err) throw err;
        res.send(doc);
    })
}

module.exports.updateTodos = (req, res)=>{
    Todo.update(req.body[0], req.body[1], (err, doc)=>{
        if (err) throw err;
        res.send(doc);
    })
}