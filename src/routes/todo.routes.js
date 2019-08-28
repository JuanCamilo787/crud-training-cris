var express = require('express')
var todoRouter = express.Router()

const todoCtrl = require('./../controllers/todo.controller');

todoRouter.post('/', todoCtrl.createTodo);
todoRouter.get('/', todoCtrl.getTodos)
todoRouter.get('/:id', todoCtrl.getTodoById)

module.exports = todoRouter;