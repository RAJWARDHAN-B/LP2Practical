const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    genre: String
});

const Book = mongoose.model('Book', bookSchema);

app.post('/addBook', async (req,res)=>{
    try {
        const book = new Book(req.body);
        await book.save();
        res.json({ message: "Book Added" });

    } catch (err) {
        res.send(err);
    }
});

app.get('/books', async (req,res)=>{
  try {
    const data = await Book.find();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});

app.put('/updateBook/:id', async (req,res)=>{
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Book Updated" });
  } catch (err) {
    res.send(err);
  }
});

app.delete('/deleteBook/:id', async (req,res)=>{
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book Deleted" });
  } catch (err) {
    res.send(err);
  }
});

app.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000");
});