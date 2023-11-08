const express = require('express');
const MenuItem = require('../models/menuItems');


const router = new express.Router();


router.get('/:type', async function(req, res, next){
    try{
        const menuItems = await MenuItem.get(req.headers.rest_id, req.params.type)
        return res.json({menuItems});
    }catch(e){
        return next(e);
    }
})

module.exports = router;