const express = require('express');
const router = express.Router(); 

const { 
    getTodos,
    addTodo,
    getOneTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoListController');

router.get('/',getTodos);
router.post('/',addTodo);
router.get('/:id',getOneTodo);
router.patch('/:id',updateTodo);
router.delete('/:id',deleteTodo);

module.exports = router;