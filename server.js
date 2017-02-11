//dependencies
var MarkovChain = require('markovchain');
var fs = require('fs');
var express = require('express');
var path = require('path');
var cron = require('node-cron');
var app = express();

//------------------------------------------
/*
//Server to serve static html file
app.get('/', function(req,res){
   res.sendFile(path.join(__dirname + '/www/index.html')); 
});

app.listen(8080);

*/






//Markov chain ------------------------------
//Read from lyrics textfile
var lyrics = new MarkovChain(fs.readFileSync('./ken.txt', 'utf8'));

//constructor
var useUpperCase = function(wordList) {
  var tmpList = Object.keys(wordList).filter(function(word) {
    return word[0] >= 'A' && word[0] <= 'Z'
  })
  return tmpList[~~(Math.random()*tmpList.length)]
}

//log result
for (i = 0; i < 11; i++) {
    console.log(
        lyrics.start(useUpperCase)
        .end(Math.floor((Math.random() * 20) + 3)).process() + ".")
}