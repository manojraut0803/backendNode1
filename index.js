require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("Hello There!");
});

app.get('/twitter', (req, res)=>{
    res.send("Manoj Raut");
});

app.get('/login', (req, res)=>{
    res.send("<h1>Please login to see updates</h1>");
});

app.get('/youtube', (req, res)=>{
    res.send("<h2>You are welcome to this page</h2>");
});


app.listen(port, ()=>{
    console.log(`Server is running on ${port}...`);
});
