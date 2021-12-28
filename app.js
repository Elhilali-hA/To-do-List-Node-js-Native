'use strict'
const http = require('http');
const fs = require('fs');
const insert = require('./database.js')
const qs = require('querystring')


http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   var url = req.url;
   if (url === '/users' && req.method === 'POST') {
      let Raw = ''
      req.on('data', data => Raw += data).on('end', () => {
         let info = qs.parse(Raw);
         res.writeHead(200, { 'Content-Type': 'text/plain' });
         console.log(req.raw);
         if (Raw){
          insert.user(info.id, info.name)
         }
         res.end(`Hello ${info.name} your id: ${info.id}`);
         
      })
      

   
   }

   else if (url === '/projects') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      console.log(insert.select());
      return res.end();

   }

   else {
      fs.createReadStream('index.html').pipe(res)
      res.writeHead(200, { 'Content-Type': 'text/html' });

   }
}).listen(8180)
