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
    .pipe(gulp.dest('css'));
});

gulp.task('minify:script', () => {
  return gulp.src(config.script.dist)
    .pipe($.plumber())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('minify', ['minify:style', 'minify:script']);
