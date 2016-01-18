describe('Array removal utility', function () {

  describe('complement', function () {

    it('is a function', function () {
      expect(typeof complement).toEqual('function');
    });

    it('takes a function and returns a function', function () {
      var result = complement(function () {});
      expect(typeof result).toEqual('function');
    });

    it('returns a function that itself returns the logical opposite of the input function', function () {
      function isPositive (n) {
        return n > 0;
      }
      var isNotPositive = complement(isPositive);
      expect(isNotPositive(10)).toEqual(false);
      expect(isNotPositive(-10)).toEqual(true);
      expect(isNotPositive(0)).toEqual(true);
    });

  });

  describe('remove', function () {

    it('is a function', function () {
      expect(typeof remove).toEqual('function');
    });

    it('takes an array and a function and returns an array', function () {
      var result = remove([], function () {});
      expect(Array.isArray(result)).toEqual(true);
    });

   
   // The runRemoval function is used in the re-assign the value assigned to "result" 
   // In the next three specs, runRemoval is invoked.
    var input, result;
    function isNegative (n) {
        return n < 0;
      }
    function runRemoval () {
      input = [4, -10, 0, 6, -3, -20];      
      result = remove(input, isNegative);
    }

    it('removes every element from the array for which the function called on that element returns true', function () {
      runRemoval();
      expect(result).toEqual([4, 0, 6]);
    });

    it('does not modify the original', function () {
      runRemoval();
      expect(input).toEqual([4, -10, 0, 6, -3, -20]);
    });

    it('makes use of the complement function', function () {
      spyOn(window, 'complement').and.callThrough();
      runRemoval();
      expect(complement).toHaveBeenCalled();
    });

  });

});
