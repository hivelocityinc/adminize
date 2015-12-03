/* jshint node:true */

'use strict';

// Node mobules
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

// Config
var config = {
  style:  './src/scss/**/*.scss',
  script: './src/js/**/*.js',
  jade:   './test/jade/**/*.jade'
};


gulp.task('styles', function () {
  return gulp.src('./src/scss/adminize.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest('css'))
});

gulp.task('minify', function () {
  return gulp.src('./src/scss/adminize.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.cssnano())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest('css'))
});


gulp.task('script', function () {
  gulp.src(config.script)
    .pipe($.plumber())
    .pipe(gulp.dest('js'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.uglify())
    .pipe(gulp.dest('js'));
});


gulp.task('watch', function () {
  gulp.watch(config.style, ['styles', 'minify']);
  gulp.watch(config.script, ['script']);
});


gulp.task('default', ['styles', 'minify', 'script', 'watch']);
