import gulp from 'gulp';

gulp.task('build', ['less', 'image', 'fonts', 'watch'], (callback) => {
    gulp.start('jsx');
})
