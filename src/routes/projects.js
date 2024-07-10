const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const projectController = require('../controllers/projectController');


router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty(), check('description', 'Description is required').not().isEmpty()]],
  projectController.createProject
);


router.get('/', auth, projectController.getProjects);


router.get('/:id', auth, projectController.getProjectById);

module.exports = router;
