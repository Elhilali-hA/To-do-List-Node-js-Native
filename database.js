const http = require('http')
const fs = require('fs')
var mysql = require('mysql');
const { name } = require('ejs');


let con = mysql.createConnection({
host: "localhost",
database: "node__test",
user: "root",
password: "",
});

function getinfo(){
  const prompt = require('prompt-sync')();
  let name = prompt('What is your name?');
  console.log(`Hey there ${name}`);
  
  let title = prompt('name your project :');
  console.log(`Your Project ${title} is ready`);
  
  let desc = prompt('name your description :');
  console.log(`description : ${desc}`);
}


exports.user = function user(id,name){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  con.connect(function(err) { 
    let sql = "INSERT INTO users (id, name) VALUES ('"+ id + "','"+ name + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
}

function insert(){
  con.connect(function(err) { 
    let sql = "INSERT INTO project (id, name, description, date) VALUES ('id','"+ title + "', '"+ desc + "', date)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
}
exports.push = function push (){
       return    insert();
} 
  

function selectp(){
    con.connect(function(err){
        let sql = "select * from project"
        con.query(sql, function(err, result){
            if (err) throw err;
            console.log(result);
        })
    })
}
exports.select = function get(){
  return selectp();
};


function selectu(){
  con.connect(function(err){
      let sql = "select * from users"
      con.query(sql, function(err, result){
          if (err) throw err;
          console.log(result);
      })
  })
}
exports.selectu = function get(){
return selectu();
};




















// database connection
// var con = mysql.createConnection({
//   host: "localhost",
//   database: "node__test",
//   user: "root",
//   password: "",
// });
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

// insert :
//   con.connect(function(err) { 
//     var sql = "INSERT INTO project (id, name, description, date) VALUES ('id', 'name', 'desc', date)";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });


// select from
// con.connect(function(err) {
//         if (err) throw err;
//         var sql = "SELECT * FROM project";
//         con.query(sql, function (err, result) {
//           if (err) throw err;
//           console.log(result);
//         });
//       });

// table create
// con.connect(function(err) {;
//     var sql = "CREATE TABLE Tasks (id INT, name VARCHAR(255), date DATETIME)";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// con.connect(function(err) {
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });


http.createServer(function (req, res) {
    fs.readFile('index.html', function(err,  data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);