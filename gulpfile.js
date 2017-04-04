var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('styles/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('dist'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("styles/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});