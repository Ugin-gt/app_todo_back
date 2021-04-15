const createError = require('http-errors');
const _ = require('lodash');
const { Todo } = require('../models');

const checkBody = body => _.pick(body, ['isDone', 'deadline', 'body']);

module.exports.createTodo = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    const values = checkBody(body);

    const todo = await userInstance.createTodo(values);

    if (!todo) {
      return next(createError(400));
    }

    res.send({ data: todo });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserTodos = async (req, res, next) => {
  try {
    const { userInstance: user, pagination } = req;

    const todos = await user.getTodos({
      ...pagination,
    });

    if (!todos.length) {
      return next(createError(404, 'User without todos'));
    }

    res.send({ data: todos });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTodo = async (req, res, next) => {
  try {
    const {
      params: { todoId },
      body,
    } = req;

    const values = checkBody(body);

    const [count, [updatedTodo]] = await Todo.update(values, {
      where: { id: todoId },
      returning: true,
    });

    if (!updatedTodo) {
      return next(createError(400));
    }

    res.send({ data: updatedTodo });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const {
      params: { todoId },
    } = req;

    const rowsCount = await Todo.destroy({ where: { id: todoId } });

    if (rowsCount !== 1) {
      return next(createError(404));
    }
    res.send({ data: rowsCount });
  } catch (err) {
    next(err);
  }
};
