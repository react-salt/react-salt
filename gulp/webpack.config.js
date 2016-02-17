import config from 'config';

export default {
    entry: config.path.js.entries,
    output: {
        path: config.path.js.dest,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.(es6|js|jsx)$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]        
    }
}
