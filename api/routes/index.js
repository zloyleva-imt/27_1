const router = require('express').Router();
const models = require('../models');
router.get('/users', async (req,res) => {
    try{
        let users = await models.User.scope('hidePersonalData').findAll()
        res.json({
            data: users
        });
    }catch(e){
        console.log(e)
        res.status(500).json({
            error: "Server was broken"
        });
    }
});

module.exports = router;