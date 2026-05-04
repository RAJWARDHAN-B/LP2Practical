const express = require('express');
const app = express();
const users = require('./users.json');
const path = require('path');

app.get('/api/users', (req,res) =>{
    res.json(users);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});