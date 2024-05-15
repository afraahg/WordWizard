const { Console } = require('console')
const express = require('express')
const { stringify } = require('querystring')
var bodyParser = require('body-parser');
var path = require('path');



const app = express()
app.listen(3000)
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname + '/static')))


app.post('/Fetch_Data',(req,res)=>{
    console.log('inside Fetch_Data')
    res.send({message: "hello"})

    //res.status(200).json({message: "hello"})
    //runQuery('SELECT * FROM scores')
});

app.post('/Page2',(req,res)=>{
    if(req.body) {
        res.status(200).send('Body data recieved')
    } else {
        res.status(400).send('No body data received.');
    }
});

app.post('/Page3',(req,res)=>{
    if(req.body) {
        res.status(200).send('Body data recieved')
    } else {
        res.status(400).send('No body data received.');
    }
});


app.get("/", (req, res) =>{
    console.log("reloading")
    res.status(200).render('home')
})

app.get('/browse', function (req, res) {
    console.log("render browse")
    res.render('browse')
});

app.get('/games', function (req, res) {
    console.log("render browse")
    res.render('browse')
});

app.get('/home', function (req, res) {
    console.log("render home")
    res.render('home')
});

app.get('/about', function (req, res) {
    console.log("render about")
    res.render('about')
});

app.get('/settings', function (req, res) {
    console.log("render settings")
    res.render('settings')
});


function runQuery(query){
    const spawner = require('child_process').spawn
    const python_process = spawner('python', ['.\\db-interface.py', query])

    python_process.stdout.on('data', (data) => {
        console.log('data recieved from python script:', data.toString())
        answer = data.toString()
    });
}