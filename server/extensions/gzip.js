import gzip from 'koa-gzip';

export default function(app, config) {
	app.use(gzip());
}
