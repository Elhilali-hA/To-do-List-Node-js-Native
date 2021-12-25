const http = require('http');
const fs = require('fs');
const insert = require('./database.js')
// const username = require('./api/controllers/UserController')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'routes'});
    var url = req.url;
    if(url ==='/users'){
      res.writeHead(200, {'Content-Type':  'application/json'});
      console.log(insert.selectu());
       return res.end(); 
     }

     else if(url ==='/projects'){
        res.writeHead(200, {'Content-Type':  'application/json'});
       console.log(insert.select());
        return res.end();
   
     }
     
     else{
        fs.readFile('public/index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            return res.end();
        }); 
     }
}).listen(8180)
