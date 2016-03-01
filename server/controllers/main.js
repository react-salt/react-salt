import Controller from '../controller';
import config from 'config';
import serialize from 'serialize-javascript';
import path from 'path';
import fs from 'fs';
import marked from 'marked';

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
		let docName = path.join(config.path.doc, request.url.split('/').pop() + '.md');
		let docFile = fs.existsSync(docName) ? fs.readFileSync(docName, 'utf8') : '';

        this.render({
            page: '/test',
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
            page: '/test',
            script: 'bootstrap',
            metadata: JSON.stringify({
                page: 'common-md',
                url: request.url
            })
        });
    }

	/*
	*	预定义一种组件模块加载的controller
	* */
	*component(cp) {
		console.log('加载组件: ' + cp);
		let { request } = this.ctx;
		// 获取当前组件examples文件夹下的文件
		let files = fs.readdirSync(path.join(config.path.npm, 'cat-' + cp, 'examples'));
		let jsxReg = new RegExp('.jsx$');
		let list = files.filter((fileName) => jsxReg.test(fileName));

		this.render({
			page: '/components',
			script: 'bootstrap',
			metadata: JSON.stringify({
				page: 'common-md',
				url: request.url
			})
		});
	}
}
