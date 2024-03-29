/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { TypeTester } = require('../index');
const {
  TagTester,
  isBoolean,
  isObject,
  isNull,
  isUndefined,
  isElement,
  isString,
  isNumber,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isFunction,
  isDataView,
  isValidDataView,
  isTagObject,
  isBufferLike
} = require('../index');


// null
// undefined
// NaN
// string
// number
// float
// array
// typed array
// function
// object
// all above with above constructors 
// error
// BufferView
// DataView
// isTypedArray,
// isBufferLike,
// supportsArrayBuffer,
// toString,
// supportsDataView,
// nativeIsArrayBufferView,
// isTypedArrayUsingPattern,
// toBufferView,
// getShallowProperty,
// TypeTester

console.log("isString: ", true, isString("tester"))
console.log("isNumber : ", true, isNumber(1))
console.log("isBoolean : ", true, isBoolean(true))
console.log("isDate : ", false, isDate(Date.now()))
console.log("isDate : ", true, isDate(new Date(Date.now())))
var isArray = TagTester("Array");
console.log("isArray : ", true, isArray([1, 2, 3]))
console.log("isRegExp : ", true, isRegExp(new RegExp(/^d/g)))
console.log("isRegExp : ", true, isRegExp(/^d/))
console.log("isError : ", false, isError(Error))
console.log("isError : ", true, isError(new Error("Tester")))
console.log("isSymbol : ", true, isSymbol(Symbol("Tester")))
let isArrayBuffer = TypeTester("ArrayBuffer");
console.log("isArrayBuffer : ", false, isArrayBuffer([]))
console.log("isArrayBuffer : ", false, isArrayBuffer(Buffer.from([])))
console.log("isArrayBuffer : ", true, isArrayBuffer(new ArrayBuffer([])))
console.log("isFunction : ", true, isFunction(() => { }))
console.log("isDataView : ", false, isDataView([]))
console.log("isTagObject : ", true, isTagObject({ "sc": 10 }))
