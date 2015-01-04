/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var pretty = require('..');

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

describe('pretty', function () {
  it('should format HTML.', function () {
    pretty(fixture).should.equal(expected);
  });
});

