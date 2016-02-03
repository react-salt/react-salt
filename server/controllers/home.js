import Controller from '../controller';

export default class Home extends Controller {
  *index() {
    this.render('/');
  }
}
