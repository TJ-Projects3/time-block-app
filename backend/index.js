// Import the task controller logic from taskController.js
const taskController = require('./taskController');

// Import the user controller logic from userController.js
const userController = require('./userController');

// Export all controllers as an object
// This allows other parts of the application (like route files)
// to import all controllers from a single place
module.exports = {
  taskController,
  userController
};
