const express = require('express');
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

/**
 * @description this function create an todo item
 */

module.exports.createTodo = (req, res, next)=>{
    let todo = new Todo(req.body);
    todo.save().then(doc => {
       return res.send(doc)
    }).catch(err => {
        return res.send(err)
    })
}

module.exports.getTodos = (req, res, next)=>{
    Todo.find().then(doc => {
       return res.send(doc)
    }).catch(err => {
        return res.send(err)
    })
}

module.exports.getTodoById = (req, res, next)=>{
    Todo.findById(req.params.id).then(doc => {
       return res.send(doc)
    }).catch(err => {
        return res.send(err)
    })
}

module.exports.deleteTodos = (req, res, next)=>{
    Todo.findById(req.params.id).then(doc => {
       return res.send(doc)
    }).catch(err => {
        return res.send(err)
    })
}