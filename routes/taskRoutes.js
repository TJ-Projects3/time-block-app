// routes/taskRoutes.js
// Defines API endpoints (routes) for interacting with Tasks

const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel'); // import tasks

// Create a new task (POST /api/tasks)
router.post('/', async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    
    const newTask = new Task({ title, description, dueDate, priority });
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating task' });
  }
});

// Get all tasks (GET /api/tasks)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Export the router so server.js can use it
module.exports = router;
