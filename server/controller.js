import Salt from 'koa-salt';

import render from './middlewares/render';

export default class Controller extends Salt.Controller {
  render(dir) {
    render.apply(this.ctx, arguments);
  }
}

