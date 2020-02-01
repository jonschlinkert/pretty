/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
const assert = require('assert');
const pretty = require('./');


describe('pretty', () => {
  it('should format HTML.', () => {
    const fixture = '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Document</title> </head> <body> this is content... </body> </html>';
    const expected = [
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

  it('should add a newline before comments', () => {
    const fixture = [
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
    const expected = [
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

  it('should move "closing" comments after closing tags', () => {
    const fixture = [
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
    const expected = [
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

