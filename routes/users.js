const express = require('express');
const router = express.Router();

const UserModel = require('../models/user.js');

// Getting all users from the `users` collection
// through GET request
router.get('/', async (req, res) => {

    // Note find() function needs to be awaited
    const users = await UserModel.find();
    res.status(200).json(users);
})

// Creating a user using POST request
router.post('/', async (req, res) => {
    const userReceived = new UserModel({
        name: req.body.name,
        followedChannels: req.body.followedChannels
    })
    try {
        const newUser = await userReceived.save()
        // 201 means using a POST request a new object was successfully created
        res.status(201).json(newUser);
    } catch (err) {
        // 400 means something was wrong with user input and 
        // hence the request couldn't be completed
        res.status(400).json({ message: err.message });
    }
});

// GET a user using the ID
router.get("/:id", getUser, (req, res) => {
    res.status(200).json(res.user);
})

// DELETE a user from the Database using the ID
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.deleteOne();
        res.status(200).json({ message: "Deleted User Successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// update a user's details in the database using the ID
// through PATCH http method
router.patch("/:id", getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name;
    }
    if (req.body.followedChannels != null) {
        res.user.followedChannels = req.boy.followedChannels;
    }
    try {
        const updatedUser = await res.user.save();
        res.status(201).json(updatedUser);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Middleware to fetch user from database through the ID provided
async function getUser(req, res, next) {
    let user
    try {
        user = await UserModel.findById(req.params.id);
        if (user == null) {
            // 404 status code means a resource was not found on the server or db
            return res.status(404).json({ message: "Cannot Find the User" })
        }
    } catch (err) {
        // To catch unexpected Internal Server Error 
        // which are indicated by 500 status code
        return res.status(500).json({ message: err.message })
    }
    // Creating a variable on the `response` object
    // so that it can be available in other functions as well.
    res.user = user
    next();
}

module.exports = router;
