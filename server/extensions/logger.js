
// todo 此处可以增加更详细的服务端记录
export default function(app, config) {
	return function *(next) {
		try {
			if (this.status >= 400) {
				this.redirect('/error');
			}
		} catch(e) {
			console.log(e);
		}
	}
}