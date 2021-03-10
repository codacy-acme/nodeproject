const assert  = require('assert');
const example = require('../src/server/lib/example.js');
const pluralize = example.pluralize;
const fizzbuzz = example.fizzbuzz;


describe('example', function () {

  describe('pluralize', function () { 
    it('keeps singular when count is 1', function () {
      assert.strictEqual(pluralize(1, 'cat'), '1 cat');
    });

    it('goes plural when count is 2', function () {
      assert.strictEqual(pluralize(2, 'cat', 'cats'), '2 cats');
    });
  });

  describe('FizzBuzz - First Half', function() {
    it('should return 1 when the input is 1', function() {
      assert.strictEqual(fizzbuzz(1), "1");
    });

    it('should return 2 when the input is 2', function() {
      assert.strictEqual(fizzbuzz(2), "2");
    });

    it('should return "Fizz" when the input is 3', function() {
      assert.strictEqual(fizzbuzz(3), "Fizz");
    });

    it('should return "Buzz" when the input is 5', function() {
      assert.strictEqual(fizzbuzz(5), "Buzz");
    });

    it('should return "Fizz" when the input is 6', function() {
      assert.strictEqual(fizzbuzz(6), "Fizz");
    });

    
  }); 
});
