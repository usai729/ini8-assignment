const mysql = require("mysql");
const _ = require("dotenv").config();

module.exports = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB_NAME,
  port: process.env.PORT,
  password: process.env.PASSWORD,
});
