const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Route to get all users
router.get('/users', controller.getUsers);

// Route to create a new user (should use POST)
router.post('/createuser', controller.addUser);

// Route to update an existing user (should use PUT)
router.post('/updateuser', controller.updateUser);

// Route to delete a user (should use DELETE)
router.post('/deleteuser', controller.deleteUser);

module.exports = router;
