import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import Task from "./models/taskModel.js";

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST /tasks - Create a new task
app.post("/tasks", async (req, res) => {
  const { title, time } = req.body;

  // Validate required fields
  if (!title || !time) {
    return res.status(400).json({
      success: false,
      message: "Please provide both title and time fields.",
    });
  }

  try {
    // Create and save the new task
    const newTask = new Task({ title, time });
    await newTask.save();

    res.status(201).json({
      success: true,
      message: "Task created successfully.",
      data: newTask,
    });
  } catch (error) {
    console.error("Error in creating task:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error. Unable to create task.",
    });
  }
});

// Start the server
app.listen(5000, () => {
  connectDB();
  console.log("Server is online on port 5000");
});