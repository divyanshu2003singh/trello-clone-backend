const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Backlog', 'In Discussion', 'In Progress', 'Done'],
    default: 'Backlog',
  },
  tags: [String],
  dueDate: Date,
  assignedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Task', TaskSchema);
