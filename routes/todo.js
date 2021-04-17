const { Router } = require('express');
const TodoController = require('../controller/todo.controller');
const { checkUser } = require('../middlewares/user.mw');

const todoRouter = Router();

todoRouter.post('/users/:id', checkUser, TodoController.createTodo);
todoRouter.get('/users/:id', checkUser, TodoController.getUserTodos);

todoRouter.patch('/:todoId', TodoController.updateTodo);
todoRouter.delete('/:todoId', TodoController.deleteTodo);

module.exports = todoRouter;
