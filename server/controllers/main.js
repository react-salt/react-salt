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

    /*
     *  预定义一种自动加载md文件的controller
     *  此类模板后期可能不需要单独js文件
     * */
    *commonMd() {
        let { request } = this.ctx;

        this.render({
            page: '/test',
            script: 'bootstrap',
            metadata: JSON.stringify({
                page: 'common-md',
                url: request.url
            })
        });
    }

    /*
     *  预定义一种用户自定义内容的controller
     * */
    *base() {
        let { request } = this.ctx;

        this.render({
            page: '/test',
            script: 'bootstrap',
            metadata: JSON.stringify({
                page: 'common-md',
                url: request.url
            })
        });
    }


}
