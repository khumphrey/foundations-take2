describe('count deep keys function', function() {

  it('is a function', function () {
    expect(typeof countDeepKeys).toEqual('function');
  });

  it('returns a number, zero by default', function () {
    expect(countDeepKeys.call({})).toEqual(0);
  });

  it('counts the number of keys in an object', function () {
    var input = {a: 100, b: 'nothing', c: true};
    // notice the .call - very important!
    var result = countDeepKeys.call(input);
    expect(result).toEqual(3);
  });

  it('will also include in the count any keys of objects that are contained in the base object', function () {
    var input = {someNum: 10, inner: {x: '50', y: '100', z: '-10'}, someOtherThing: true, anotherObj: {yes: false}};
    var result = countDeepKeys.call(input);
    expect(result).toEqual(8);
  });

  function runCountDeepKeysOnDeeplyNestedObject () {
    var input = {
      a: {},
      b: {
        c: true,
        d: {
          e: true,
          f: {}
        },
        g: true,
        h: {
          i: {
            j: {
              k: true
            }
          },
          l: true
        }
      },
      m: {
        n: true,
        o: {
          p: {
            q: {},
            r: true,
            s: {
              t: {
                u: true
              },
              v: true
            }
          }
        },
        w: {
          x: true,
        },
        y: {}
      },
      z: true
    };
    return countDeepKeys.call(input);
  }

  it('deeply counts all keys, including nested objects', function () {
    var result = runCountDeepKeysOnDeeplyNestedObject();
    expect(result).toEqual(26);
  });

  it('uses recursion for deep counting', function () {
    spyOn(window, 'countDeepKeys').and.callThrough();
    var result = runCountDeepKeysOnDeeplyNestedObject();
    expect(result).toEqual(26);
    expect(countDeepKeys.calls.count()).toEqual(16);
  });

  it('accepts an optional parameter for which keys to match', function () {
    var input = {moreThanTwo: 'nothing', of: 'nothing', is: 'nothing', and: {why: 'nothing', up: 'nothing', without: {}}, i: 'nothing'};
    // can pass in a predicate key matcher that returns a boolean
    // if the predicate returns truthily, the key should be included in the count
    // if the predicate returns falsily, the key should not be included in the count
    var result = countDeepKeys.call(input, function (key) {
      return key.length > 2;
    });
    expect(result).toEqual(4);
  });

});
