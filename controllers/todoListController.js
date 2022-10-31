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
const updateTodo = async (req, res)=>{
    try {
        todoUpdated = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({todoUpdated});
    } catch (error) {
        res.status(500).json({message: err});
    }
}
const deleteTodo = async (req, res)=>{
    try {
        const todoDeleted = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({todoDeleted});
    } catch (error) {
        res.status(500).json({message: err});
    }

}


module.exports = {
    getTodos,
    createTodo,
    getOneTodo,
    updateTodo,
    deleteTodo
}