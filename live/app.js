const Shadow = require('shadow-deploy-client');

const shadow = new Shadow({
  apiKey: 'sk_5e03iby11',
  projectId: 'proj_p0y19ec9j'
});

require('dotenv').config();
// parse JSON bodies for POST testing
const PORT = process.env.PORT || 3002;

const express = require('express');

const app = express();

// parse JSON bodies for POST testing
app.use(express.json());
// serve static UI
app.use(express.static(__dirname + '/public'));

// Add middleware
// app.use(shadow.proxyHandler);

app.get('/api/app',(req,res)=>{
    res.send("HEllo from live app of your code..")
})

app.get('/api/shadow-status',(req,res)=>{
    res.json({ shadowStatus: "Live server wala" });
});

// Testing routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', env: 'live' });
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

app.listen(3001,()=>{
    console.log("Server runned live...")
})
