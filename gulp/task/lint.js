'use strict';

let gulp = require('gulp');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin();
let postcssScss = require('postcss-scss');
let postcssReporter = require('postcss-reporter');
let stylelint = require('stylelint');
let config = require('../config');

gulp.task('lint:style', () => {
  return gulp.src(config.style.src)
    .pipe($.postcss([
      stylelint(),
      postcssReporter({clearMessages: true})
    ], {syntax: postcssScss}));
});

gulp.task('lint:script', () => {
  return gulp.src(config.script.src)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

gulp.task('lint', ['lint:style', 'lint:script']);
