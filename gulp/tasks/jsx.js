import gulp from 'gulp';
import webpack from 'webpack';

const webpackConfig = require('../webpack.config.js');

gulp.task('jsx', (callback) => {
    webpack(webpackConfig, (err, status) => {
        if (err) console.log(err);
    });
});
