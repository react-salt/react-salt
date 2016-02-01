import path from 'path';

const rootPath = path.dirname(__dirname);
const port = 7778;

let __root = dir => path.join(rootPath, dir);

export default Object.assign(require('../package.json'), {
  port,
  path: {
    assets: __root('assets'),
    extensions: __root('server/extensions')
  }
});
