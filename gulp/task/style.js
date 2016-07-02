'use strict';

let gulp = require('gulp');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin();
let config = require('../config');

gulp.task('style', () => {
  return gulp.src(config.style.src)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer(config.style.prefix))
    .pipe($.sourcemaps.write('.', config.style.map))
    .pipe(gulp.dest('css'))
    .pipe($.copy('test'));
});
