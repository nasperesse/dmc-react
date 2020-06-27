const gulp = require('gulp')
var concat = require('gulp-concat');

gulp.task('default', () => {
    return gulp.src(['./build/static/js/2.*.chunk.js', './build/static/js/main.*.chunk.js', './build/static/js/runtime-main.*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./build/'))
});