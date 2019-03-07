const express = require('express');
const app = express();

let session = require('express-session'); 
app.use(session({ secret: 'song', 
                  resave: false, 
                  saveUninitialized: false, 
                  cookie: { maxAge: 60000 }}));

app.get('/', list);                  
app.get('/sort', sort);
app.get('/add', add);
app.get('/remove', remove);
app.get('/clear', clear);

app.listen(process.env.PORT,  process.env.IP, startHandler());

const song = [];
function startHandler()
  {
    console.log('Server listening on port ' + process.env.PORT);
  }

function sort(req, res)
  {
    var sorted;
    req.session.song = req.query.song;
    let result = {'songs' : sorted};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end('');
  }

function list(req, res)
  {
    req.session.songs=new Array();
    let result = {'songs' : `${req.session.songs}`};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end('');
      
  }

function add(req, res)
  {
    req.session.song = req.query.song;
    song.push(req.query.song);
    let result = {'songs' : song};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end('');
  }

function remove(req, res)
  {
    let result = {'songs' : remove};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end('');
  }

function clear(req, res)
  {
    req.session.songs = undefined; 
    let result= {'songs' : clear};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end('');
  }