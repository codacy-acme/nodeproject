const assert  = require('assert');

const pluralize = require('../src/server/lib/example.js').pluralize;

describe('example', function () {
  describe('pluralize', function () {
    it('keeps singular when count is 1', function () {
      assert.strictEqual(pluralize(1, 'cat'), '1 cat');
    });

    it('goes plural when count is 2', function () {
      assert.strictEqual(pluralize(2, 'cat', 'cats'), '2 cats');
    });
  });
});
