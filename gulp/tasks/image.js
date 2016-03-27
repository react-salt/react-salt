import gulp from 'gulp';
import config from 'config';

gulp.task('image', function() {
    gulp.src(config.path.image.src)
        .pipe(gulp.dest(config.path.image.dest));
});
