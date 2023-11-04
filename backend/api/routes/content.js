const express = require('express');

const { BadRequestError } = require('../expressError');
const Content = require('../models/content');
const authenticateJWT = require('../middleware/auth');
const app = require('../app');

const router = new express.Router();

router.get('/text', async function(req, res, next){
    try{
        console.log(req.headers)
        let data = await Content.getText(req.headers.rest_id, req.headers.loc_id);
        return res.json({data});
    }catch(e){
        next(e);
    }
})

router.get('/hours', async function(req, res, next){
    try{
        let data = await Content.getHours(req.headers.rest_id);
        return res.json({data});
    }catch(e){
        next(e);
    }
})

module.exports = router;