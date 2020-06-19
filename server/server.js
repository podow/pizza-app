const next = require('next');
const path = require('path');
require('dotenv').config({ path: path.resolve(`${__dirname}/../.env`) });
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const express = require('express');
const cacheableResponse = require('cacheable-response');

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

  server.get('/', (req, res) => {
    const pagePath = '/';
    return !dev ? ssrCache({ req, res, pagePath }) : app.render(req, res, '/');
  });

  server.get('/project/:slug', (req, res) => {
    return app.render(req, res, '/project', { slug: req.params.slug });
  });

  server.get('/news/:slug', (req, res) => {
    const queryParams = {
      slug: req.params.slug,
      category_id: req.params.category_id
    };
    const pagePath = '/news';

    return !dev
      ? ssrCache({ req, res, pagePath, queryParams })
      : app.render(req, res, '/news', {
          slug: req.params.slug,
          category_id: req.params.category_id
        });
  });

  server.get('/flat/:id', (req, res) => {
    const queryParams = { id: req.params.id };
    const pagePath = '/flat';

    return !dev
      ? ssrCache({ req, res, pagePath, queryParams })
      : app.render(req, res, '/flat', { id: req.params.id });
  });

  server.get('/flatslist/:slug', (req, res) => {
    const queryParams = { slug: req.params.slug };
    const pagePath = '/flatslist';

    return !dev
      ? ssrCache({ req, res, pagePath, queryParams })
      : app.render(req, res, '/flatslist', {
          slug: req.params.slug
        });
  });

  server.get('/perspective/:slug', (req, res) => {
    const queryParams = { slug: req.params.slug };
    const pagePath = '/perspective';

    return !dev
      ? ssrCache({ req, res, pagePath, queryParams })
      : app.render(req, res, '/perspective', { slug: req.params.slug });
  });

  server.get('/about', (req, res) => {
    const pagePath = '/about';

    return !dev
      ? ssrCache({ req, res, pagePath })
      : app.render(req, res, '/about');
  });

  server.get('/contacts', (req, res) => {
    const pagePath = '/contacts';
    return !dev
      ? ssrCache({ req, res, pagePath })
      : app.render(req, res, '/contacts');
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, error => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
