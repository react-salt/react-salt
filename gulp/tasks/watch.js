import gulp from 'gulp';
import config from 'config';

const cssPath = config.path.css;

gulp.task('watch', () => {
	return gulp.watch(cssPath.src.path + '/**/*.less', ['less']);
});