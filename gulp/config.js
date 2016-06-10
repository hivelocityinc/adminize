module.exports = {
  style: {
    src: './src/scss/**/*.scss',
    dist: './css/adminize.css',
    prefix: {
      browsers: ['last 2 versions'],
      cascade: false
    },
    map: {
      includeContent: false,
      sourceRoot: '.'
    },
    lint: {
      'config': '.scss-lint.yml'
    }
  },
  script: {
    src: './src/js/**/*.js',
    root: './src/js/adminize.js',
    dist: './js/adminize.js'
  }
};
