'use strict';

let gulp = require('gulp');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin({
  rename: {
    'gulp-scss-lint': 'scssLint'
  }
});
let config = require('../config');

gulp.task('lint:scss', () => {
  return gulp.src(config.style.src)
    .pipe($.scssLint(config.style.lint))
    .pipe(gulp.dest('./reports'));
});

gulp.task('lint', ['lint:scss']);
