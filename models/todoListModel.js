const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
	title: {
		type:String,
		required: [true, 'You should enter some todo'],
		trim: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},					
  });

module.exports = mongoose.model('Todo', TodoListSchema);	