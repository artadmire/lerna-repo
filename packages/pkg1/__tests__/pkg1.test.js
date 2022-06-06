'use strict';

const pkg1 = require('../lib/pkg1.js');

test('adds 1 + 2 to equal 3', () => {
  expect(pkg1(1, 2)).toBe(3);

});
