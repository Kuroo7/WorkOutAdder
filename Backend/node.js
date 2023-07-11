const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routs/workout');

require('dotenv').config();


const app = express();


app.use(express.json());

app.use('/api/workout', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to mongoose");
        app.listen(process.env.PORT, () => {
            console.log("Listening to port 4000");
        })
    })
    .catch(err => {
        console.log("Not connected", err);
    })