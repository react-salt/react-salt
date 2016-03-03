import gulp from 'gulp';
import less from 'gulp-less';
import config from 'config';

const cssPath = config.path.css

gulp.task('less', () => {
    return gulp.src(cssPath.src.common)
            .pipe(less())
            .pipe(gulp.dest(cssPath.dest));
});
