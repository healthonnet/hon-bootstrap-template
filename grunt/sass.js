module.exports = {
  test: {
    options: {
      check: true,
    },
    files: {
      'www/css/app.css': 'src/scss/hon-bootstrap-template.scss',
    },
  },
  build: {
    options: {
      sourcemap: 'none',
    },
    files: {
      'www/css/hon-bootstrap-template.css':
        'src/scss/hon-bootstrap-template.scss',
    },
  },
};
