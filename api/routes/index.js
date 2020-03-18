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

router.get('/users/:user_id', async (req,res) => {
    const user = await models.User.scope('hidePersonalData').findByPk(req.params.user_id);
    res.json({
        data: user
    })
})

module.exports = router;