'use strict';

let gulp = require('gulp');
let gulpLoadPlugin = require('gulp-load-plugins');
let $ = gulpLoadPlugin();
let webpack = require('webpack-stream');
let config = require('../config');
let webpackConfig = require('../webpack.config');

gulp.task('script', () => {
  return gulp.src(config.script.root)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('js'))
    .pipe($.copy('test'));
});
