'use strict';

let gulp = require('gulp');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin();
let config = require('../config');

gulp.task('minify:style', () => {
  return gulp.src(config.style.src)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer(config.style.prefix))
    .pipe($.cssnano())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.write('.', config.style.map))
    .pipe(gulp.dest('css'))
    .pipe($.copy('test'));
});

gulp.task('minify', ['minify:style']);
