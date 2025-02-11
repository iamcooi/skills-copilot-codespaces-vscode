// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Data
let comments = [
  {
    id: 1,
    name: 'John',
    comment: 'Hello World!'
  },
  {
    id: 2,
    name: 'Jane',
    comment: 'Hi there!'
  }
];

// Routes
app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send('Comment is added to the database');
});

app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id === parseInt(id));
  res.send(comment);
});

app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  const comment = comments.find(comment => comment.id === parseInt(id));
  comment.name = newComment.name;
  comment.comment = newComment.comment;
  res.send('Comment has been updated');
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments = comments.filter(comment => comment.id !== parseInt(id));
  res.send('Comment has been deleted');
});

// Listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});git add comments.js