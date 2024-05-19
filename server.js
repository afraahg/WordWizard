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

var answer

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

app.post('/testRequest', async function(req, res) {
    console.log(req.body)
    
    let script = 'SELECT * FROM scores'
    await runQuery(script)

    console.log(answer)
        res.send({
            'testVar': answer,
          });
  });


app.get("/", (req, res) =>{
    console.log("reloading")
    res.status(200).render('home')
})

app.get('/browse', function (req, res) {
    console.log("render browse")
    res.render('browse')
});

app.get('/typeRacer', function (req, res) {
    console.log("render type racer")
    res.render('typeRacer')
});

app.get('/wordChain', function (req, res) {
    console.log("render word chain")
    res.render('wordChain')
});

app.get('/games', function (req, res) {
    console.log("render games")
    res.render('games')
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

app.get('/wordChain', function (req, res) {
    console.log("render wordChain")
    res.render('wordChain')
});

app.get('/typeRacer', function (req, res) {
    console.log("render typeRacer")
    res.render('typeRacer')
});

function runQuery(query){
    const spawner = require('child_process').spawn
    const python_process = spawner('python', ['.\\db-interface.py', query])

    python_process.stdout.on('data', (data) => {
        console.log('data recieved from python script:', data.toString())
        answer = data.toString()
    });
}

const supabaseClient = require('@supabase/supabase-js')

const supabaseUrl = 'https://mdazieiqdwqszmkyhbdz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXppZWlxZHdxc3pta3loYmR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwOTcxMDQsImV4cCI6MjAzMTY3MzEwNH0.EDfQSulRMz_deJiBk8yyEfL0Hy4U5Bb4nBGYVeyUQpA'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/topWords', async (req, res) =>{
  console.log("attempt to get")

  const {data, error} = await supabase
    .from('countedWords')
    .select()
    .order('Count', {ascending: false})
    .limit(5)
  console.log('Data:', data)
  console.log('Error:', error)

  res.send(data)

})

app.get('/WordSearch/:word', async (req, res) =>{
    let word = req.params.word
    const {data, error} = await supabase
        .from('countedWords')
        .select()
        .eq('Word', word)
    console.log('Data:', data)
    console.log('Error:', error)

    res.send(data)
      
})

app.get('/insertWord/:word', async(req, res) =>{
    let word = req.params.word
    const { error } = await supabase
        .from('countedWords')
        .insert({Word: word, Count : 1 })
    console.log('Error:', error)

    res.sendStatus(200)
})

app.get('/updateWord/:word/:number', async(req, res) =>{
    let word = req.params.word
    let number = req.params.number
    const { error } = await supabase
        .from('countedWords')
        .update({Count : number })
        .eq('Word', word)
    console.log('Error:', error)

    res.sendStatus(200)
})

app.get('insert')
