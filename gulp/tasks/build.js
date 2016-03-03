import gulp from 'gulp';

gulp.task('build', ['less', 'watch'], (callback) => {
    gulp.start('jsx');
})
