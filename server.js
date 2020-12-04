const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

// create an express application
const app = express();

// express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
// This method is called as a middleware in your application using the code
app.use(express.json());

app.listen(3000, () => {
    console.log("Server Listening on")
})

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
});

// get the connection to the db
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// If connection is made successfully, log to the console
db.once("open", () => {
    console.log("Connection Established")
})


// Rousting Middleware
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
// This means that userRouter will handle requrest from localhost.com/users/ endpoint