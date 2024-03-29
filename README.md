# which-type
determine which type of js is the object using which-type


### USAGE

```
const { 
  TagTester,
  TypeTester,
  isBufferLike ,
  isString,
  isNumber,
  isBoolean,
  isDate,
  isArray,
  isRegExp,
  isError,
  isSymbol,
  isArrayBuffer,
  isFunction,
  isDataView,
  isObjectTag
 } = require("which-type-js");


console.log("isString: ", true, TagTester("String")("tester"));
console.log("isNumber : ", true, TagTester("Number")(1));
console.log("isBoolean : ", true, TagTester("Boolean")(true));
console.log("isDate : ", false, TagTester("Date")(Date.now()));
console.log("isDate : ", true, TagTester("Date")(new Date(Date.now())));
console.log("isArray : ", true, TagTester("Array")([1, 2, 3]));
console.log("isRegExp : ", true, TagTester("RegExp")(new RegExp(/^d/g)));
console.log("isRegExp : ", true, TagTester("RegExp")(/^d/));
console.log("isError : ", false, TagTester("Error")(Error));
console.log("isError : ", true, TagTester("Error")(new Error("Tester")));
console.log("isSymbol : ", true, TagTester("Symbol")(Symbol("Tester")));
console.log("isArrayBuffer : ", false, TagTester("ArrayBuffer")([]));
console.log("isArrayBuffer : ", false, TagTester("ArrayBuffer")(Buffer.from([])));
console.log("isArrayBuffer : ", true, TagTester("ArrayBuffer")(new ArrayBuffer([])));
console.log("isFunction : ", true, TagTester("Function")(() => { }));
console.log("isDataView : ", false, TagTester("DataView")([]));
console.log("hasObjectTag : ", true, TagTester("Object")({ "sc": 10 }));


console.log("isString: ", true, TypeTester("String")("tester"));
console.log("isNumber : ", true, TypeTester("Number")(1));
console.log("isBoolean : ", true, TypeTester("Boolean")(true));
console.log("isDate : ", false, TypeTester("Date")(Date.now()));
console.log("isDate : ", true, TypeTester("Date")(new Date(Date.now())));
console.log("isArray : ", true, TypeTester("Array")([1, 2, 3]));
console.log("isRegExp : ", true, TypeTester("RegExp")(new RegExp(/^d/g)));
console.log("isRegExp : ", true, TypeTester("RegExp")(/^d/));
console.log("isError : ", false, TypeTester("Error")(Error));
console.log("isError : ", true, TypeTester("Error")(new Error("Tester")));
console.log("isSymbol : ", true, TypeTester("Symbol")(Symbol("Tester")));
console.log("isArrayBuffer : ", false, TypeTester("ArrayBuffer")([]));
console.log("isArrayBuffer : ", false, TypeTester("ArrayBuffer")(Buffer.from([])));
console.log("isArrayBuffer : ", true, TypeTester("ArrayBuffer")(new ArrayBuffer([])));
console.log("isFunction : ", true, TypeTester("Function")(() => { }));
console.log("isDataView : ", false, TypeTester("DataView")([]));
console.log("hasObjectTag : ", true, TypeTester("Object")({ "sc": 10 }));


console.log("isString: ", true, isString("tester"));
console.log("isNumber : ", true, isNumber(1));
console.log("isBoolean : ", true, isBoolean(true));
console.log("isDate : ", false, isDate(Date.now()));
console.log("isDate : ", true, isDate(new Date(Date.now())));
console.log("isArray : ", true, isArray([1, 2, 3]));
console.log("isRegExp : ", true, isRegExp(new RegExp(/^d/g)));
console.log("isRegExp : ", true, isRegExp(/^d/));
console.log("isError : ", false, isError(Error));
console.log("isError : ", true, isError(new Error("Tester")));
console.log("isSymbol : ", true, isSymbol(Symbol("Tester")));
console.log("isArrayBuffer : ", false, isArrayBuffer([]));
console.log("isArrayBuffer : ", false, isArrayBuffer(Buffer.from([])));
console.log("isArrayBuffer : ", true, isArrayBuffer(new ArrayBuffer([])));
console.log("isFunction : ", true, isFunction(() => { }));
console.log("isDataView : ", false, isDataView([]));
console.log("hasObjectTag : ", true, isObject({ "sc": 10 }));

```
