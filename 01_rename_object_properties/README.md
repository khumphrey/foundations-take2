# Rename Object Properties

### Total Points: 6.00

Create the function `renameObjectProperties` that accepts two arguments, an array of strings and a boolean value.  The `renameObjectProperties` function will replace the current properties on an object and replace them with the array of strings argument.  The second argument will determine if the properties should be capitalized or if they should stay in their original form.

If you do not know how to delete a property from an object please use the [documetation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) about the `delete` operator in javascript.

Some examples:

```
var obj = {a:1,b:2,c:3,d:4};
renameObjectProperties.apply(obj,[["one","two","three","four"],false]);
// obj = obj = {one:1,two:2,three:3,four:4};
```

```
var obj = {1:"a",2:"b",3:"c", 4:"d"};
renameObjectProperties.apply(obj,[["a","b","c","d"],true]);
// obj = {"A":"a", "B":"b", "C":"c", "D":"d"};
```
