import Meow from 'koa-meow';

import render from './middlewares/render';
import renderCp from './middlewares/renderCp';

export default class Controller extends Meow.Controller {
  render(dir) {
    render.apply(this.ctx, arguments);
  }
  renderCp(dir) {
  	renderCp.apply(this.ctx, arguments);
  }
}

