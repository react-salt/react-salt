import Meow from 'koa-meow';

export default Meow()
.load('init')
.load('routes');
