module.exports = function(grunt, options) {
  'use strict';

  return {
    build: {
      options: {
        pretty: true,
        data: function(dest, src) {
          return grunt.file.readJSON('package.json');
        },
      },
      files: {
        'www/index.html': 'src/views/index.pug',
        'www/getting-started.html': 'src/views/getting-started.pug',
      },
    },
  };
};
