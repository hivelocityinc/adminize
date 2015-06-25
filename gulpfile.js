/* jshint node:true */

'use strict';

// Node mobules
var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    minifycss       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    uglify          = require('gulp-uglify'),
    plumber         = require('gulp-plumber'),
    webserver       = require('gulp-webserver'),
    autoprefixer    = require('gulp-autoprefixer');


// Config
var config = {
    style:  './src/scss/**/*.scss',
    script: './src/js/**/*.js',
    jade:   './test/jade/**/*.jade'
};


gulp.task('styles', function () {
    gulp.src([config.style])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('docs/public/assets/css'));
});


gulp.task('script', function () {
    gulp.src(config.script)
        .pipe(plumber())
        .pipe(gulp.dest('js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});


gulp.task('watch', function () {
    gulp.watch(config.style, ['styles']);
    gulp.watch(config.script, ['script']);
});


gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            port: 8888,
            livereload: true
        }));
});

gulp.task('setup', ['styles', 'script']);
gulp.task('develop', ['setup', 'webserver', 'watch']);
gulp.task('default', ['watch']);
