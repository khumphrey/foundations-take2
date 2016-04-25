# Rename Object Properties

### Total Points: 6.00

Create the function `renameObjectProperties` that accepts two arguments, an object specifying keys to rename and a boolean value. The boolean will determine if the renamed keys should be capitalized or if they should stay in their original form.

If you do not know how to delete a property from an object please use the [documetation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) about the `delete` operator in javascript.

Some examples:

```
var sourceObj = {a:1,b:2,c:3,d:4};
var renamed = renameObjectProperties.call(sourceObj, {a: 'one', b: 'two', c: 'three', d: 'four'}, false);
// renamed should equal {one:1,two:2,three:3,four:4};
```

```
var sourceObj = {blah:'stuff',foo:'bar'};
var renamed = renameObjectProperties.call(sourceObj, {blah: 'other', foo: 'qux'}, true);
// renamed should equal {OTHER:'stuff',QUX:'bar'};
```
