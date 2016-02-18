import gulp from 'gulp';

gulp.task('build', ['less'], (callback) => {
    gulp.start('jsx');
})
