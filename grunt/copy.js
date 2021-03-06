// Copy files
module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'images/**'],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/bootstrap/dist/',
      src: [ 'css/bootstrap.min.css' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/bootstrap/dist/',
      src: [ 'fonts/**' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/bootstrap/dist/',
      src: [ 'js/bootstrap.min.js' ],
      dest: 'www/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/jquery/dist/',
      src: [ 'jquery.min.js' ],
      dest: 'www/js/',
      nonull: true,
    },{
      expand: true,
      cwd: 'bower_components/responsive-sticky-footer-plugin/dist/',
      src: [ 'jquery.responsiveStickyFooter.min.js' ],
      dest: 'www/js/',
      nonull: true,
    },],
  },
  release: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**'],
      dest: 'dist/',
      nonull: true,
    },{
      expand: true,
      cwd: 'src/',
      src: ['images/**'],
      dest: 'dist/',
      nonull: true,
    },],
  },
};
