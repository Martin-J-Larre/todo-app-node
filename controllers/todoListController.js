const Todo = require('../models/todoListModel');

const getTodos = async (req, res)=>{
    

}
const createTodo = async (req, res)=>{
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json({todo});
    } catch (err) {
        console.log(err);
    }
}
const getOneTodo = (req, res)=>{
    res.send('getone');
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