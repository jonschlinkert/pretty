/*
 * pretty
 * https://github.com/jonschlinkert/pretty
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/test-*.js'],
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
      }
    },

    clean: {
      test: ['test/actual/*']
    }
  });

  // Tests to be run.
  grunt.registerTask('test', ['jshint', 'nodeunit']);

  // Default task.
  grunt.registerTask('default', ['clean', 'test']);

};
