var express = require("express");
const pino = require("express-pino-logger")();
var app = express();
var mysql = require("mysql");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "../public/image/" });

app.use(pino);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog"
});

con.connect(err => {
  if (err) throw err;
  console.log("databaseConnected");
});

app.post("/api", upload.single("avatar"), (req, res) => {
  var username = req.body.heading;
  var email = req.body.content;

  if (username && email) {
    const tempPath = req.file.path;
    const targetPath = path.join(
      __dirname,
      "../public/image/" + req.file.filename + req.file.originalname
    );
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);
      res
        .status(200)
        .contentType("multipart/form-data")
        .end("File uploaded!");
    });
    const sqlInsert =
      "INSERT INTO blogdata (blogheading,blogdata,image) VALUES ('" +
      username +
      "','" +
      email +
      "','" +
      targetPath +
      "')";
    con.query(sqlInsert, (err, data) => {
      if (err) throw err;
      console.log(data.length);
    });
  }
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE blog", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE blogdata (  id INT AUTO_INCREMENT PRIMARY KEY,  blogheading VARCHAR(255), blogdata VARCHAR(255) , image VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// app.post("/api",(req, res)=>{
//   var heading = req.body.heading;
//   var content = req.body.content;
//   var picture = req.body.picture
//   console.log(heading)
//   console.log(picture)
//   var sql = "INSERT INTO blogdata (blogheading	, blogdata , image) VALUES ('"+heading+"', '"+content+"','"+picture+"')";
//   con.query(sql,(err , result) => {
//     if (err) throw err;
//       console.log("1 record inserted");
//   })
// })

app.get("/api", (req, res) => {
  var sql = "SELECT * FROM blogdata";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

app.listen(3001, () => console.log("Server Started"));
