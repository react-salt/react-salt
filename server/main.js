import Meow from 'koa-meow';

export default Meow()
.load('init')
.load('static')
.load('routes')
.load('logger');
//.load('gzip');
