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
      style: 'expanded',
    },
    files: [{
      'www/css/hon-bootstrap-template.css':
        'src/scss/hon-bootstrap-template.scss',
    },{
      'dist/css/hon-bootstrap-template.css':
        'src/scss/hon-bootstrap-template.scss',
    },],
  },
  release: {
    options: {
      style: 'compressed',
    },
    files: {
      'dist/css/hon-bootstrap-template.min.css':
        'src/scss/hon-bootstrap-template.scss',
    },
  },
};
