import Meow from 'koa-meow';

import render from './middlewares/render';

export default class Controller extends Meow.Controller {
  render(dir) {
    render.apply(this.ctx, arguments);
  }
}

