describe('renameObjectProperties', function(){
	
	it('renameObjectProperties is a function', function(){
		expect(typeof renameObjectProperties).toEqual("function");
	});

	it('operates on an object (source), accepts a separate object (newKeyNames) as a parameter, and returns an object', function(){
		var source = {foo: 'bar'};
		var newKeyNames = {foo: 'newNameForFoo'};
		var renamed = renameObjectProperties.call(source, newKeyNames);
		expect(renamed).toEqual(jasmine.any(Object));
	});

	it('for each key in the newKeyNames object, renames a key in the source object', function(){
		var source = {firstName: 'Zeke', lastName: 'Nie'};
		var newKeyNames = {firstName: 'givenName', lastName: 'familyName'};
		var renamed = renameObjectProperties.call(source, newKeyNames);
		expect(renamed).toEqual({givenName: 'Zeke', familyName: 'Nie'});
	});

	it('will not rename a key on source if it was not originally there', function(){
		var source = {emotions: ['joy', 'sadness', 'anger', 'disgust', 'fear']};
		var newKeyNames = {emotions: 'feelings', ideas: 'thoughts'};
		var renamed = renameObjectProperties.call(source, newKeyNames);
		expect(renamed.hasOwnProperty('thoughts')).toBe(false);
		expect(renamed).toEqual({feelings: ['joy', 'sadness', 'anger', 'disgust', 'fear']});
	});

	it('skips keys of the source object\'s internal prototype', function(){
		var Alphabet = function () {
			this.a = 1;
			this.b = 2;
		};
		Alphabet.prototype.c = 3;
		var source = new Alphabet();
		var newKeyNames = {a: 'alpha', b: 'bravo', c: 'charlie'};
		var renamed = renameObjectProperties.call(source, newKeyNames);
		var expected = Object.create(Alphabet.prototype);
		expected.alpha = 1;
		expected.bravo = 2;
		expect(renamed).toEqual(expected);
	});

	it('accepts an optional second parameter, a boolean that if true will capitalize the renamed keys', function(){
		var source = {name: 'Hamlet', author: 'Shakespeare', type: 'drama', year: '~1600'};
		var newKeyNames = {name: 'title', type: 'category'};
		var renamed = renameObjectProperties.call(source, newKeyNames, true);
		expect(renamed).toEqual({TITLE: 'Hamlet', author: 'Shakespeare', CATEGORY: 'drama', year: '~1600'});
	});

});