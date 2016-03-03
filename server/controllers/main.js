import Controller from '../controller';
import config from 'config';
import serialize from 'serialize-javascript';
import path from 'path';
import fs from 'fs';
import marked from 'marked';

export default class Main extends Controller {
    *index() {
        this.render({
            page: 'index',
            script: 'bootstrap',
            path: config.path,
            metadata: JSON.stringify({
                page: 'index'
            })
        });
    }

    *test() {
        this.render({
            page: 'test',
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
		let docName = path.join(config.path.doc, request.url.split('/').pop() + '.md');
		let docFile = fs.existsSync(docName) ? fs.readFileSync(docName, 'utf8') : '';

        this.render({
            page: 'common-md',
            script: 'bootstrap',
            metadata: JSON.stringify({
                page: 'common-md',
                url: request.url,
				readme: marked(docFile)
            }),
			readme: marked(docFile)
        });
    }

    /*
     *  预定义一种用户自定义内容的controller
     * */
    *base() {
        let { request } = this.ctx;

        this.render({
            page: 'base',
            script: 'bootstrap',
            metadata: JSON.stringify({
                page: 'base',
                url: request.url
            })
        });
    }
}
