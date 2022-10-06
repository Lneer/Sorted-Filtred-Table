const express = require('express');
const fs = require('fs/promises');
const pagination = require('./utils/pagination');
const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', (req, res) => {
  const { _page, _limit } = req.query;
  fs.readFile('./bd/bd.json', { encoding: 'utf-8' }).then((data) => {
    const resp = pagination(JSON.parse(data), Number(_page), Number(_limit));
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(resp);
  });
});
