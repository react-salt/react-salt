//import Router from 'koa-router';
//import render from '../middlewares/render';
//import Controller from '../controller';
//var router = Router();

import routeify from 'meow-routeify';

export default function(app, config) {
  return routeify(app, config.path);
  /*
  router.get('/', function *(next) {
    this::render('/');
    yield next;
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());
    */
}
