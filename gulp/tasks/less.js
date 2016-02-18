import gulp from 'gulp';
import less from 'gulp-less';
import config from 'config';

const cssPath = config.path.css

gulp.task('less', () => {
    return gulp.src(cssPath.src.bootstrap)
            //.pipe(less())
            // TODO: 目前单纯复制，之后引入less编译
            .pipe(gulp.dest(cssPath.dest));
});
