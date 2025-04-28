
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Mock data
let tasks = [];
let users = [];

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to AI Time Blocker Backend (Node.js)!');
});

// Task routes
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).send('Task created!');
});

// User routes
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('User added!');
});

// Calendar route placeholder
app.get('/api/calendar/sync', (req, res) => {
    res.send('Calendar sync feature coming soon!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
