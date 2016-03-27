import gulp from 'gulp';
import less from 'gulp-less';
import config from 'config';

const cssPath = config.path.css

gulp.task('less', () => {
    gulp.src([cssPath.src.bootstrap, cssPath.src.salt])
        .pipe(gulp.dest(cssPath.dest));
    return gulp.src(cssPath.src.common)
            .pipe(less())
            .pipe(gulp.dest(cssPath.dest));
});
