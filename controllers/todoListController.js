const getTodos = (req, res)=>{
    res.send('All TODOS');
}
const createTodo = (req, res)=>{
    res.json(req.body);
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