const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { project, name, description, status, tags, dueDate, assignedUser } = req.body;
  try {
    const projectExists = await Project.findById(project);
    if (!projectExists) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    const newTask = new Task({
      project,
      name,
      description,
      status,
      tags,
      dueDate,
      assignedUser,
    });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({}).populate('project').populate('assignedUser');
      res.json(tasks);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
