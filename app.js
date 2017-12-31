const express = require('express');
var path = require('path');

const app = express();

const port = 4000;

//Adding a public static folder for hs and css
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Server started  ' + port);
});

//About Route
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname+'/public/about.html'));
});

//Routing Projects
app.get('/projects', (req, res) =>{
    res.sendFile(path.join(__dirname+'/public/projects.html'));
});

//Routing Jobs
app.get('/job', (req, res) =>{
    res.sendFile(path.join(__dirname+'/public/job.html'));
});

//Routing main page
app.get('/main',function(req,res){
    res.sendFile(path.join(__dirname+'/public/main.html'));
  });