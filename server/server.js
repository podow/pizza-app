const next = require('next');
const path = require('path');
require('dotenv').config({ path: path.resolve(`${__dirname}/../.env`) });
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const express = require('express');
const cacheableResponse = require('cacheable-response');
const bodyParser = require('body-parser');
const axios = require('axios');

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
});

app.prepare().then(() => {
  const server = express();

  server.use(
    '/static',
    express.static(__dirname + '/static', {
      maxAge: '365d'
    })
  );
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get('/', (req, res) => {
    const pagePath = '/';
    return !dev ? ssrCache({ req, res, pagePath }) : app.render(req, res, '/');
  });

  server.post('/order', (req, res) => {
    axios
      .post(
        'https://innoscripta-pizza-back-podow.herokuapp.com/order',
        req.body
      )
      .then(data => res.send({ data: data.data }))
      .catch(reason => res.send(reason));
  });

  server.post('/auth', (req, res) => {
    axios
      .post('https://innoscripta-pizza-back-podow.herokuapp.com/auth', req.body)
      .then(data => res.send({ data: data.data }))
      .catch(reason => res.send(reason));
  });

  server.post('/signup', (req, res) => {
    axios
      .post(
        'https://innoscripta-pizza-back-podow.herokuapp.com/signup',
        req.body
      )
      .then(data => res.send({ data: data.data }))
      .catch(reason => res.send(reason));
  });

  server.get('/get-history', (req, res) => {
    axios
      .get('https://innoscripta-pizza-back-podow.herokuapp.com/history', {
        headers: req.headers
      })
      .then(data => res.send({ data: data.data }))
      .catch(reason => res.send(reason));
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, error => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
