import serve from 'koa-static';
import config from 'config';

export default function(app, config) {
    return serve(config.path.assets);
}
