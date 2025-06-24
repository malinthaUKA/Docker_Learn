const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// import user model
const User = require('./User');


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { // mongoose.connect('mongodb://localhost:27017/fulstackDbDocker' - mema url eka thamay wenas wenne, mkd api dan localhost eke database ekath ekka newey sambanda wenne mongodb container ekath ekka
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });

// API routes for create user
app.post('/api/users', async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json({message: "User created successfully", data: result});
    } catch (error) {
        res.status(500).json({error: "Internal Server Error" + error});
    }
});

// API routes for get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({message: "All Users get successfully", data: users});
    } catch (error) {
        res.status(500).json({error: "Internal Server Error" + error});
    }
});

// listen to port
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});