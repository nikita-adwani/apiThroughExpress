import express from 'express';
import bodyParser from 'body-parser';
// const bodyparser = require('body-parser');
import todoRoutes from './route/todo.js'
const app = express();
const port = 5000;
app.use(bodyParser.json());

app.get('/', (req, res) => res.send("This is home page"));
app.use('/todoList', todoRoutes)
app.listen(port, () => console.log(`server running to the port ${port}`));