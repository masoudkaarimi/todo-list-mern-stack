const router = require('express').Router();
const Todo = require('../models/Todo');

// Get Todos
router.get('/', (req, res) => {
	Todo.find((err, result) => {
		if (err) throw new Error(err);

		// console.log(`Getting all of todos ${result}`);
		result = { data: { success: true, message: { todos: [...result] } } };
		res.json(result);
	});
});

// Add Todo
router.post('/', (req, res) => {
	Todo.create(req.body, (err, result) => {
		if (err) throw new Error(err);

		// console.log(`Created a new todo ${result}`);
		result = { data: { success: true, message: { todo: result } } };
		res.json(result);
	});
});

// Edit Todo
router.put('/:id', (req, res) => {
	Todo.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		{ /* returnOriginal: false  */ new: true },
		(err, result) => {
			if (err) throw new Error(err);

			// console.log(`Updated todo by id ${req.params.id} ${result}`);
			result = { data: { success: true, message: { todo: result } } };
			res.json(result);
		}
	);
});

// Delete Todo
router.delete('/:id', (req, res) => {
	Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
		if (err) throw new Error(err);

		// console.log(`Deleted todo by id ${req.params.id} ${result}`);
		result = { data: { success: true, message: { todo: result } } };
		res.json(result);
	});
});

module.exports = router;
