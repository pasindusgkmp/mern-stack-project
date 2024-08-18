const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// Route to get all users
app.get('/users', (req, res) => {
    controller.getUsers((users) => {
        res.send(users);
    });
});

// Route to create a user
app.post('/createuser', (req, res) => {
    controller.addUser(req.body, (result) => {
        res.send(result);
    });
});

// Route to update a user
app.post('/updateuser', (req, res) => {
    controller.updateUser(req.body, (result) => {
        res.send(result);
    });
});

// Route to delete a user (change route to avoid conflict with /updateuser)
app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.body, (result) => {
        res.send(result);
    });
});

module.exports = app;
