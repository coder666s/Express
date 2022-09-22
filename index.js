const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Произошло подключение");
  res.send({ message: 'Hello Express' });
});

app.listen(3000, () => {
  console.log('Сервер запущен по адресу http://localhost:3000');
});


const model = require('./model');
app.use('/model', model);

app.use('/user/:id', function (req, res, next) {//При получении запроса
  console.log('Request Type:', req.method);
  res.set('Content-Type', 'text/html');
  res.send(
  `<!DOCTYPE html>
  <html>
  <head>
      <title>Главная</title>
      <meta charset="utf-8" />
  </head>
  <h1>` + req.baseUrl + `</h1>
  <h2>` + req.method + `</h2>
  <h3>` + req.baseUrl.substring(req.baseUrl.lastIndexOf('/')) + `</h3>
  <body></body>
  <html>
  `);
     
  next();
});


