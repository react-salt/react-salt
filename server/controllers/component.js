import Controller from '../controller';
import config from 'config';
import serialize from 'serialize-javascript';
import path from 'path';
import fs from 'fs';
import marked from 'marked';

export default class Component extends Controller {
	/*
	*	预定义一种组件模块加载的controller
	* */
	*base(cp) {
		let { request } = this.ctx;
		// 获取当前组件examples文件夹下的文件
		let files = fs.readdirSync(path.join(config.path.npm, 'cat-' + cp, 'examples'));
		let jsxReg = new RegExp('.jsx$');
		let list = files.filter((fileName) => jsxReg.test(fileName));
		console.log('加载组件: ' + cp);
		console.log('组件样例列表:' + list);

		this.renderCp({
			page: '/components',
			script: 'bootstrap',
			metadata: JSON.stringify({
				page: 'component',
				url: request.url,
				cp: cp,
				list: list
			})
		});
	}
}
