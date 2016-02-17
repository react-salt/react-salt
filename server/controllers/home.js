import Controller from '../controller';
import config from 'config';

export default class Home extends Controller {
  *index() {
    this.render({
      page: '/',
      script: 'bootstrap',
      path: config.path
    });
  }
}
