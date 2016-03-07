import config from 'config';
import LiveReloadPlugin from 'webpack-livereload-plugin';

export default {
    entry: config.path.js.entries,
    output: {
        path: config.path.js.dest,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    watch: true,
    module: {
        loaders: [{
			test: /\.(es6|js|jsx)$/,
			exclude: /(node_modules(?!\/rs-))/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0']
			}
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}]
    },
    devtool: 'source-map',
    plugins: [new LiveReloadPlugin()]
}
