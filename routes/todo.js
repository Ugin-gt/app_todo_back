const { Router } = require('express');
const TodoController = require('../controller/todo.controller');
const paginate = require('../middlewares/paginate.mw');
const { checkUser } = require('../middlewares/user.mw');

const todoRouter = Router();

todoRouter.get('/:id', paginate, checkUser, TodoController.getUserTodos);
todoRouter.post('/:id', checkUser, TodoController.createTodo);

todoRouter.patch('/:todoId', TodoController.updateTodo);
todoRouter.delete('/:todoId', TodoController.deleteTodo);

module.exports = todoRouter;