// models/Task.js
// Defines the structure (schema) of a Task in the database

const mongoose = require('mongoose');

// Create the Task schema (what a Task looks like in the database)
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,          // Title of the task (example: "Finish homework")
    required: true,        // This field is required
  },
  description: {
    type: String,          // Optional description (example: "Math homework due tomorrow")
  },
  dueDate: {
    type: Date,            // Due date and time of the task
  },
  priority: {
    type: String,          // Priority level: low, medium, high
    enum: ['Low', 'Medium', 'High'], 
    default: 'Medium',     // Default priority if none is provided
  },
  completed: {
    type: Boolean,         // Whether the task is completed or not
    default: false,        // By default, a task is not completed
  },
}, {
  timestamps: true         // Automatically creates "createdAt" and "updatedAt" fields
});

// Export the Task model so we can use it elsewhere
module.exports = mongoose.model('Task', TaskSchema);
