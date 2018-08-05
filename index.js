const express = require('express')
const cors = require('cors')
let app = express()

app.use(cors())

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'frykten04',
  database : 'pricehub'
});

app.listen(3001);
