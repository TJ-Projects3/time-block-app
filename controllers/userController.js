const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
  res.status(200).json({ message: 'Login successful', token });
};