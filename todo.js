import express from 'express';
import { v4 as uuidv4 } from 'uuid';

let todoList = [];
const router = express.Router();
// router for get
router.get('/', (req, res) => {
    res.send(todoList);
});
//router for post
router.post('/', (req, res) => {
    const newTodo = req.body;
    const taskId = {...newTodo, id: uuidv4() }
    todoList.push(taskId);
    res.send(todoList);
});
//router to get id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundTask = todoList.find((newTodo) => newTodo.id === id)
    res.send(foundTask);
});
//router for delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    todoList = todoList.filter((newTodo) => newTodo.id !== id);
    console.log(id)
    res.send(`Task with the id ${id} deleted from the database!!`)
});
// for update

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { task, done } = req.params;
    const newTodo = todoList.find((newTodo) => newTodo.id === id);

    if (task) {
        newTodo.task = task;
    }
    if (done) {
        newTodo.done = done;
    }
    res.send(`User with id ${id} is updated!!`)
});
export default router;