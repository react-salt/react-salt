import Router from 'koa-router';
import render from '../middlewares/render';
import Controller from '../controller';

var router = Router();

export default function(app, config) {
  router.get('/', function *(next) {
    this::render('/');
    yield next;
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());
}
