const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const taskController = require('../controllers/taskController');


router.post(
  '/',
  [
    auth,
    [
      check('project', 'Project is required').not().isEmpty(),
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
    ],
  ],
  taskController.createTask
);


router.get('/:projectId', auth, taskController.getTasks);


router.get('/', auth, taskController.getAllTasks);

module.exports = router;
