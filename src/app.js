require('./config/db')
require('colors');

const express = require('express');
const app = express();
const router = require('./routes/index.routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', router);

app.use('*', (req, res, next) => {
    res.status(404).send({ msg: `Not found request url ${req.baseUrl}`})
})

const server = app.listen(3000, ()=>{
    console.log('Server listening on port 3000'.blue)
})