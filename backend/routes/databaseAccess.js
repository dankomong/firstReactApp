var TodoItem = require('../models/TodoItem');

const express = require('express');
const router = express.Router();

// tf is this shit get request when it should be post
router.get('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: "test task"
  });

  testTodo.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});


module.exports = router;
