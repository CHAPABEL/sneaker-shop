const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;

const myConnection = mysql.createConnection({
  host: "mysql-container",
  user: "root",
  password: "rootpassword",
  database: "accaunts_database",
});

myConnection.connect((err) => {
  if (err) {
    console.log("ошибка подключения данных", err);
  } else {
    console.log("Подключение успешное");
  }
});

app.get("/", (req, res) => {
  res.send("привет мир!");
});

app.listen(port, () => {
  console.log(`сервер запущен по адресу: http:/localhost:${port}`);
});
