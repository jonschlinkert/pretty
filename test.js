/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var assert = require('assert');
var pretty = require('./');


describe('pretty', function() {
  it('should format HTML.', function() {
    var fixture = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Document</title> </head> <body> this is content... </body> </html>';
    var expected = [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>Document</title>',
      '  </head>',
      '  <body> this is content... </body>',
      '</html>',
    ].join('\n');
    assert.equal(pretty(fixture, {ocd: true}), expected);
  });

  it('should add a newline before comments', function() {
    var fixture = [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>Document</title>',
      '    <!-- comment -->',
      '  </head>',
      '  <body> this is content... </body>',
      '</html>',
    ].join('\n');
    var expected = [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>Document</title>',
      '',
      '    <!-- comment -->',
      '  </head>',
      '  <body> this is content... </body>',
      '</html>',
    ].join('\n');
    assert.equal(pretty(fixture, {ocd: true}), expected);
  });

  it('should move "closing" comments after closing tags', function() {
    var fixture = [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>Document</title>',
      '  </head>',
      '  <body> this is content... </body>',
      '  <div> foo </div>',
      '  <!-- /end -->',
      '</html>',
    ].join('\n');
    var expected = [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>Document</title>',
      '  </head>',
      '  <body> this is content... </body>',
      '  <div> foo </div> <!-- /end -->',
      '</html>',
    ].join('\n');
    assert.equal(pretty(fixture, {ocd: true}), expected);
  });
});

