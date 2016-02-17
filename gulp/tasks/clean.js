import gulp from 'gulp';
import config from 'config';
import del from 'del';

gulp.task('clean', (callback) => {
    del(config.path.assets, (err, paths) => {
        console.log('Deleted files/folders:\n', paths.join('\n'));
        callback();
    })
});
