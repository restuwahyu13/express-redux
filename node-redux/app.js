const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const parallelMiddleware = require('./helpers/parallelMiddleware');
const createMhsRoute = require('./routes/mhs.route/create.route');
const resultsMhsRoute = require('./routes/mhs.route/results.route');
const resultMhsRoute = require('./routes/mhs.route/result.route');
const deleteMhsRoute = require('./routes/mhs.route/delete.route');
const updateMhsRoute = require('./routes/mhs.route/update.route');

// init connection
mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('database connection successfully'))
.catch(() => console.log('database connection failed'));

// set global promise
mongoose.Promise = global.Promise;

// run all module
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// rul all route with paraller middleware
app.use('/', parallelMiddleware([ 
    createMhsRoute, 
    resultsMhsRoute, 
    resultMhsRoute,
    deleteMhsRoute,
    updateMhsRoute
]));

// listen port
app.listen(3000, () => console.log('server is running'));