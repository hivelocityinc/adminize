'use strict';

let gulp = require('gulp');
let requireDir = require('require-dir');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin();
let runSequence = require('run-sequence');
let config = require('./gulp/config');

requireDir('./gulp/task', {recurse: true});

gulp.task('watch', () => {
  $.watch(config.style.src, () => {
    gulp.start(['style']);
  });
});

gulp.task('default', () => {
  return runSequence(
    'lint',
    'style',
    'minify',
    'watch'
  );
});
