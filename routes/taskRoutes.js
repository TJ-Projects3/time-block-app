const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// Protected task routes
router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;