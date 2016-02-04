import path from 'path';

const rootPath = path.dirname(__dirname);
const port = 7778;

let __root = dir => path.join(rootPath, dir);

export default Object.assign(require('../package.json'), {
  port,
  path: {
    assets: __root('assets'),
    app: __root('server/main.js'),
    routes: __root('server/routes'),
    extensions: __root('server/extensions'),
    controllers: __root('server/controllers'),
    layout: __root('server/views/default.html')
  }
});
