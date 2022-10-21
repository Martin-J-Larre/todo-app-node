const express = require('express');
const router = express.Router(); 

const { 
    getTodos,
    createTodo,
    getOneTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoListController');

router.get('/',getTodos);
router.post('/',createTodo);
router.get('/:id',getOneTodo);
router.patch('/:id',updateTodo);
router.delete('/:id',deleteTodo);

module.exports = router;