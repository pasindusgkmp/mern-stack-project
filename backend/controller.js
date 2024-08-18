//const User = require('./model');

// const getUsers = async (req, res) => {
//     User.find()
//     .then(response => {
//         res.json(response);
//     })
//     .catch(error => {
//         res.json({error});
    
//     });
   
// };


// //add
// const addUser = async (req, res,next) => {
//     const user = new User({
//         id: req.body.id,
//         name: req.body.name,
//     });
//     user.save()
//     .then(response => {
//         res.json(response);
//     })
//     .catch(error => {
//         res.json({error});
    
//     });
// }


// //update

// const updateUser = async (req, res,next) => {
//     const {id,name} = req.body;
//     User.updateOne({id: id}, {$set :{name: name}})
//     .then(response => {
//         res.json(response);
//     })
//     .catch(error => {
//         res.json({error});
    
//     });
// }


// //delete

// const deleteUser = async (req, res,next) => {
//     const {id} = req.body.id;
//     User.deleteOne({id: id})
//     .then(response => {
//         res.json(response);
//     })
//     .catch(error => {
//         res.json({error});
    
//     });


// }
// exports.getUsers = getUsers;
// exports.addUser = addUser;
// exports.updateUser = updateUser;
// exports.deleteUser = deleteUser;
////////////////////////////////////////////////////////////////////////////

const User = require('./model');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add a new user
const addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.send(savedUser);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.body.id, req.body, { new: true });
        res.send(updatedUser);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.body.id);
        res.send(deletedUser);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
