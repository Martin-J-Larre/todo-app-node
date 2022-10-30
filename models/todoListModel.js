const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
	title: String,
	completed: Boolean,					
  });

module.exports = mongoose.model('Todo', TodoListSchema);	