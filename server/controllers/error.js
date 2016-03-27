import Controller from '../controller';
import config from 'config';

export default class Component extends Controller {
	/*
	*	预定义一种组件模块加载的controller
	* */
	*base() {
		let { request } = this.ctx;

		this.render({
			page: 'error',
			script: 'bootstrap',
			metadata: JSON.stringify({
				page: 'error',
				url: request.url
			})
		});
	}
}
