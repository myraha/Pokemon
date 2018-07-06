//http access
const http = require('http');
//file access
const fs = require('fs')
//url access
const url = require('url');
let querystring = require('querystring');
// const figlet = require('figlet')

//create a new server
const server = http.createServer(function(req, res) {
  //parsing url and storing in page
  const page = url.parse(req.url).pathname;
  //looks at query perameters that were sent with the url (if any)
  let params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  //conditionals to look at url of each request
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    //check if pokemon query string was a parameter
    if('pokemon' in params){
      //check what the pokemon query string equaled
    if(params['pokemon']== 'Chimchar'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      var objToJson = {
        name: "Chimchar",
        type: "Fire Type",
        number: "#390"
      }
      res.end(JSON.stringify(objToJson));
    }else if(params['pokemon'] == 'Turtwig'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      var objToJson = {
        name: "Turtwig",
        type: "Grass Type",
        number: "#387"
      }
      res.end(JSON.stringify(objToJson));
    }else if(params['pokemon'] == 'Piplup'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      var objToJson = {
        name: "Piplup",
        type: "Water Type",
        number: "#393"
      }
      res.end(JSON.stringify(objToJson));
     }
   }
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
      function(err, data) {
      if (err) {
          console.log('Are you sure you selected a started pokemon');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }

server.listen(8000);
