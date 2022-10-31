const Todo = require('../models/todoListModel');

const getTodos = async (req, res)=>{
    try {
        const todos = await Todo.find({})
        res.status(200).json({todos})
    } catch (err) {
        res.status(500).json({message: err});
    }

}
const createTodo = async (req, res) =>{
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json({todo});
    } catch (err) {
        res.status(500).json({message: err});
    }
}
const getOneTodo = async (req, res) =>{
    try {
        const todoId = await Todo.findById(req.params.id);
        res.status(200).json({todoId})
    } catch (err) {
        res.status(500).json({message: err});
    }
}
const updateTodo = (req, res)=>{
    res.send('update one');
}
const deleteTodo = (req, res)=>{
    res.send('deleted');
}


module.exports = {
    getTodos,
    createTodo,
    getOneTodo,
    updateTodo,
    deleteTodo
}