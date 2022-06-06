'use strict';

const pkg2 = require('../lib/pkg2.js');

test('adds 1 * 2 to equal 2', () => {
    expect(pkg2(1, 2)).toBe(2);

});