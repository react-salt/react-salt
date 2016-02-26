import Controller from '../controller';
import config from 'config';
import serialize from 'serialize-javascript';

export default class Home extends Controller {
    *index() {
        this.render({
            page: '/',
            script: 'bootstrap',
            path: config.path,
            metadata: JSON.stringify({
                page: 'index'
            })
        });
    }

    *test() {
        this.render({
            page: '/test',
            script: 'bootstrap',
            metadata: JSON.stringify({
                page: 'test'
            })
        });
    }
}
