var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var rename = require('gulp-rename');
var minify = require('gulp-minify');

/*
 * Variables
 */
// Sass Source
var scssFiles = './src/scss/style.scss';
var jsFiles = './src/js/script.js';

// CSS destination
var cssDest = './css';
var jsDest = './js';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});


gulp.task('compress', function(done) {
  return gulp.src(jsFiles)
    .pipe(minify({noSource: true}))
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest(jsDest))
    done();
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, gulp.series(['sassdev'], ['sassprod']));
  gulp.watch(jsFiles, gulp.series(['compress']));
});

// Default task - Run with command 'gulp'
gulp.task('default', gulp.series(['sassdev'], ['sassprod'], ['compress'], ['watch']));