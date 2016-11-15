'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    cfg: {
      shapesPath: 'source/shapes',
      partialsPath: 'source/partials'
    },

    //SVG min
    svgmin: {
      options: {
        plugins: [
          {
            removeEmptyAttrs: false
          }, {
            removeViewBox: false
          }, {
            //removeUselessStrokeAndFill: true
          }, {
            removeAttrs: {
              attrs: ['xmlns','fill=none']
            }
          }
        ]
      },
      multiple: {
        files: [{
          expand: true,
          cwd: '<%= cfg.shapesPath %>/',
          src: ['**/*.svg'],
          dest: '<%= cfg.shapesPath %>/'
        }]
      }
    },

    // SVG Sprite generator
    svgstore: {
      dev: {
        options: {
          prefix : 'shape-',
          cleanup: false,
          svg: {
            viewBox : '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            style: 'display:none'
          }
        },
        src: '<%= cfg.shapesPath %>/*.svg',
        dest: '<%= cfg.partialsPath %>/_shapes.html.erb'
      },
    },
  });

  grunt.registerTask('svg', ['svgmin','svgstore:dev']);
}