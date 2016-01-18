describe("iterable function", function() {

  it('iterable is a function object', function(){
    expect(typeof iterable).toEqual('function');
  });

  it('should receive an array, and should return a function', function () {
    var inputVal = ['foo', 'bar', 'baz'];
    var returnVal = iterable(inputVal);
    expect(typeof returnVal).toEqual('function');
  });

  var storedValues = ['a', 'b', 'c', 22];
  var getNext;

  var generateRandomArray = function(length){
    var randomIntegers = [];
    for(var i = 0, length; i < length; i++){
      randomIntegers.push(Math.round(Math.random() * length));
    }
    return randomIntegers;
  };

  beforeEach(function() {
    getNext = iterable(storedValues);
  });

  it('getNext retrieves the 0th index value by default', function(){
    expect(getNext()).toEqual('a');
  });

  it('getNext can take a number argument and will return the corresponding index value in the array', function(){
    expect(getNext(2)).toEqual('c');
  });

  it('if you invoke getNext four times, the fourth time will retrieve the 3rd index value', function(){
    getNext();
    getNext();
    getNext();

    expect(getNext()).toEqual(22);
  });

  it('if you invoke getNext six times, the sixth time will retrieve the 5th index value', function(){

    var randomIntegers = generateRandomArray(50);
    var getNext = iterable(randomIntegers);

    getNext();
    getNext();
    getNext();
    getNext();
    getNext();

    expect(getNext()).toEqual(randomIntegers[5])
  });

  it('if getNext is invoked with a numerical index, it will retrieve the value at that index', function(){
    var randomIntegers = generateRandomArray(40);
    var getNext = iterable(randomIntegers);

    expect(getNext(5)).toEqual(randomIntegers[5]);
  });

  it('if getNext is invoked with a numerical index, the next invocation of getNext will access the next index value after the given parameter\'s index value', function(){
    var randomIntegers = generateRandomArray(40);
    var getNext = iterable(randomIntegers);

    getNext(5);

    expect(getNext()).toEqual(randomIntegers[6]);
    expect(getNext()).toEqual(randomIntegers[7]);
  });

  it('if all values are returned, the following getNext call will start at the 0th index', function(){
    var randomIntegers = generateRandomArray(3);
    var getNext = iterable(randomIntegers);

    getNext(2);

    expect(getNext()).toEqual(randomIntegers[0]);
  });

});
