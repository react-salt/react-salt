import gulp from 'gulp';
import config from 'config';

gulp.task('fonts', function() {
    gulp.src(config.path.fonts.src)
        .pipe(gulp.dest(config.path.fonts.dest));
});
