
// Set enviroment variables in the dotenv file
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

// Create express server and its port
const app = express();
const port = process.env.PORT || 5000;

// Middeware
app.use(cors());
app.use(express.json()); // Parse json

// Conection to the MongoDB Atlas Cluster
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
//Files required
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// Files used
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Starts litening to the server on a port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});