var gulp   = require('gulp');

// Task for copy images
gulp.task('copyimage',function () {
  return gulp.src('./dev/app/assets/img/*.*')
    .pipe(gulp.dest('./public/app/assets/img'));
});