// Controller for handling task-related logic

// [POST] Create a new task
exports.createTask = (req, res) => {
    const { title } = req.body;  // Extract 'title' from the request body
    // In a real app, we would save to a database here
    res.status(201).json({ message: `Task '${title}' created successfully!` });
};

// [GET] Retrieve all tasks
exports.getTasks = (req, res) => {
    // In a real app, we would fetch tasks from a database
    res.json([
        { id: 1, title: "Example Task 1" },
        { id: 2, title: "Example Task 2" }
    ]);
};
