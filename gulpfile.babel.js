import gulp from 'gulp'
import runSequence from 'run-sequence'
import gulpLoadPlugin from 'gulp-load-plugins'

const $ = gulpLoadPlugin({
  rename: {
    'gulp-scss-lint': 'scsslint'
  }
})
const config = {
  style: './scss/**/*.scss',
  script: './js/adminize.js'
}

gulp.task('styles', () => {
  return gulp.src('./scss/adminize.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest('css'))
})

gulp.task('scsslint', () => {
  return gulp.src(['./scss/**/*.scss'])
    .pipe($.scsslint({
      'config': '.scss-lint.yml',
      'reporterOutputFormat': 'Checkstyle',
      'filePipeOutput': 'scss_report.xml'
    }))
    .pipe(gulp.dest('./reports'))
})

gulp.task('minify', () => {
  return gulp.src('./scss/adminize.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.cssnano())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest('css'))
})

gulp.task('script', () => {
  return gulp.src(config.script)
    .pipe($.plumber())
    .pipe(gulp.dest('js'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.uglify())
    .pipe(gulp.dest('js'))
})

gulp.task('watch', () => {
  gulp.watch(config.style, () => {
    return runSequence(
      'scsslint',
      ['styles', 'minify']
    )
  })
  gulp.watch(config.script, ['script'])
})

gulp.task('default', () => {
  return runSequence(
    'scsslint',
    ['styles', 'minify', 'script'],
    'watch'
  )
})
