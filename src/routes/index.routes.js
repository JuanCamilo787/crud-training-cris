var express = require('express')
var router = express.Router()

const todoRouter = require('./todo.routes');

router.use('/todo', todoRouter);

module.exports = router;