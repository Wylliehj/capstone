'use strict';

const express = require('express');
const app = express();
const menuRoutes = require('./routes/menu');
const contentRoutes = require('./routes/content');
const cors = require('cors');

const { NotFoundError } = require('./expressError');

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use('/menu', menuRoutes)
app.use('/content', contentRoutes)

app.use(function (req, res, next) {
    console.log('in here')
    return next(new NotFoundError());
})

app.use(function (err, req, res, next){
    if(process.env.NODE_ENV !== 'test') console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
    return res.status(status).json({
        error: {message, status},
    });
});

module.exports = app;