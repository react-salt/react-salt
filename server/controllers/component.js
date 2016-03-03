import Controller from '../controller';
import config from 'config';
import serialize from 'serialize-javascript';
import path from 'path';
import fs from 'fs';
import marked from 'marked';
import { Highlight } from 'highlight';

export default class Component extends Controller {
	/*
	*	预定义一种组件模块加载的controller
	* */
	*base(cp) {
		let { request } = this.ctx;
		// 获取当前组件examples文件夹下的文件
		let componentPath = path.join(config.path.npm, 'cat-' + cp);
		let files = fs.readdirSync(path.join(componentPath, 'examples'));
		let jsxReg = new RegExp('.jsx$');
		let list = files.filter((fileName) => jsxReg.test(fileName));
		let scriptFiles = files.map((fileName) => Highlight(fs.readFileSync(path.join(componentPath, 'examples', fileName), 'utf-8')));
		// readme文件
		let readme = fs.readFileSync(path.join(componentPath, 'readme.md'), 'utf-8');

		this.render({
			page: 'component',
			script: 'bootstrap',
			metadata: JSON.stringify({
				page: 'component',
				url: request.url,
				cp: cp,
				list: list,
				readme: marked(readme),
				code: scriptFiles
			})
		});
	}
}
