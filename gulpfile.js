'use strict';

let gulp = require('gulp');
let requireDir = require('require-dir');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin();
let runSequence = require('run-sequence');
let config = require('./gulp/config');
let exec = require('child_process').exec;

requireDir('./gulp/task', {recurse: true});

gulp.task('watch', () => {
  $.watch(config.style.src, () => {
    gulp.start(['style', 'lint:style']);
  });
  $.watch(config.script.src, () => {
    gulp.start(['script', 'lint:script']);
  });
});

gulp.task('serve', (cb) => {
  exec('./node_modules/.bin/harp server --port 8888', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('develop', ['watch', 'serve']);

gulp.task('default', () => {
  return runSequence(
    'lint',
    'style',
    'minify',
    'watch'
  );
});
