const { Router } = require('express');
const userRouter = require('./user');
const todoRouter = require('./todo');

const router = Router();

router.use('/users', userRouter);
router.use('/todos', todoRouter);

module.exports = router;
