describe('renameObjectProperties', function(){
	
	it('renameObjectProperties is a function', function(){
		expect(typeof renameObjectProperties ).toEqual("function");
	});

	it('accepts an array of names as an argument and changes the names of each property on an object', function(){
		var obj = {a:1, b:2, c:3, d:4 },
				names = ['one','two','three','four'];

				renameObjectProperties.apply(obj,[names]);

				expect(obj).toEqual({one:1, two:2, three: 3, four: 4});
	});

	it('accepts a second argument that capitalizes the new property names', function(){
		var obj = {1:"a", 2:"b", 3:"c", 4:"d" },
				names = ['a','b','c','d'];

				renameObjectProperties.apply(obj,[names,true]);
				expect(obj).toEqual({A:"a", B:"b", C:"c", D:"d" });
	});

	it('if second argument is false, it does not capitalize the new property names', function(){
	var obj = {1:"a", 2:"b", 3:"c", 4:"d" },
			names = ['a','b','c','d'];

			renameObjectProperties.apply(obj,[names,false]);
			expect(obj).toEqual({a:"a", b:"b", c:"c", d:"d" });
	});

	it("skips properties of the object's prototype", function() {
			var alphabet;
	    
	    var Alphabet = function() {
	      this.a = 1;
	      this.b = 2;
	    };

	    Alphabet.prototype = {
	      c: 3
	    };

	    alphabet = new Alphabet();
	    
	    

	    renameObjectProperties.apply(alphabet, [['one','two','three'],true])

	    expect(Alphabet.prototype.c).toEqual(3);
	    expect(alphabet.THREE).toEqual(undefined);
   });

});