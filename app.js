const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const cors = require('cors');
const app = express();

// Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());


// task route
app.use('/api/v1/tasks', tasks);


const PORT = process.env.PORT || 3000;

const startDB = async () => {
    try {
        await connectDB();
        app.listen(PORT, (req, res) => {
            console.log(`Running on: localhost:${PORT}`);
        });
    }
    catch (err) {
        console.log(`An error occurred while connecting\n${err}`);
    }
};

startDB();