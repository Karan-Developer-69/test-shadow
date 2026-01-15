const express = require('express');

const app = express();

// parse JSON bodies for POST testing
app.use(express.json());

app.get('/api/app',(req,res)=>{
    res.send("HEllo from v2 of your code..")
})

app.get('/api/shadow-status',(req,res)=>{
    res.json({ shadowStatus: "V2 version server wala" });
});

// Testing routes (v2)
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', env: 'v2' });
});

app.get('/api/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});

app.get('/api/echo/:msg', (req, res) => {
    res.json({ echo: req.params.msg });
});

app.post('/api/echo', (req, res) => {
    res.json({ echo: req.body });
});

app.get('/api/headers', (req, res) => {
    res.json({ headers: req.headers });
});

app.listen(3002,()=>{
    console.log("Server runned v2...")
})

