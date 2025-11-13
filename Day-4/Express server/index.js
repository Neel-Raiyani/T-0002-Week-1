const express = require('express');
const app = express();
const port = 3018;


app.get('/',(req,res) => {
    res.send("This is GET route");
});

app.post('/post', (req,res) => {
    res.send("This is POST route");
});

app.delete('/delete', (req,res) => {
    res.send("This is DELETE route");
});

app.put('/put', (req,res) => {
    res.send("This is PUT route");
});

app.listen(port,() => {
    console.log(`App listening on http://localhost:${port}`)
});