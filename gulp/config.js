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
      'config': '.scss-lint.yml',
      'reporterOutputFormat': 'Checkstyle',
      'filePipeOutput': 'scss_report.xml'
    }
  },
  script: {
    dist: './js/adminize.js'
  }
};
