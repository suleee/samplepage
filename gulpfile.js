// Require Gulp first!
//variables
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
   return gulp.src('./sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function(){
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['watch','sass']);

