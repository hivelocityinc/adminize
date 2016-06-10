'use strict';

let gulp = require('gulp');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin({
  rename: {
    'gulp-scss-lint': 'scssLint'
  }
});
let config = require('../config');

gulp.task('lint:style', () => {
  return gulp.src(config.style.src)
    .pipe($.scssLint(config.style.lint));
});

gulp.task('lint:script', () => {
  return gulp.src(config.script.src)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

gulp.task('lint', ['lint:style', 'lint:script']);
