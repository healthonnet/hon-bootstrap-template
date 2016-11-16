module.exports = {
  options: {
    compress: {
      drop_console: true,
    },
    sourceMap: true,
    sourceMapName: 'dist/js/hon-bootstrap-template.map',
  },
  release: {
    files: {
      'dist/js/hon-bootstrap-template.min.js': [
        'src/js/hon-bootstrap-template.js',
      ],
    },
  },
};
