const router = require('express').Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.allUsers);
router.get('/:user_id', usersController.getUser);
router.post('/', usersController.createUser);
// set user status
// delete user

// get all active users
// get all not active users


module.exports = router;