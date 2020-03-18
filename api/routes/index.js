const router = require('express').Router();

const usersController = require('../controllers/usersController');

router.get('/users', usersController.allUsers);
router.get('/users/:user_id', usersController.getUser);
router.post('/users', usersController.createUser);
// set user status
// delete user

// get all active users
// get all not active users

module.exports = router;