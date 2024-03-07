/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { expect } = require('chai');
const { TagTester,
  TypeTester,
  isBufferLike,
  TypedArray,
  isTypedArray 
} = require('../index');

// all below with above constructors 

// // null
// null

// // undefined
// undefined
// y

// // NaN
// NaN
// NaN/ NaN
// "Test"/ "T"
// "Test"/0
// "Test"/1
// "Test"/-1
// -1/ "Test"
// 1/ "Test"
// 0/ "Test"
// "T"/ "Test"
// 10/-1
// 10/0
// 10/1
// ""/ NaN
// NaN/ ""
// Infinity/ "T"
// Infinity/0
// Infinity/1
// Infinity/-1
// -1/ Infinity
// 1/ Infinity
// 0/ Infinity
// "T"/ Infinity
// Infinity/ NaN
// Infinity/ "T"
// Infinity/ 0
// Infinity/ -1
// Infinity/ 1

// // boolean
// true
// false

// // string
// "Test"
// "1"
// "true"
// 'Test'
// '1'
// 'true'
// `Test`
// `1`
// `true`

// // number
// 1
// -1
// 0
// Number(1)
// Number(-1)
// Number(0)

// // float
// -123.3234
// 123.3234
// 0.00

// // bigint
// BigInt(true)
// BigInt(8945879)
// BigInt("8945879")
// BigInt(9843894n)
// BigInt(8945879894389438904098509854095409540950956095605605605405056)

// // array
// [23, 6, 76, 45, 45]
// new Array([])
// new Array()
// new Array(5)
// new Array([23, 6, 76, 45, 45])
// Array.from([23, 6, 76, 45, 45])
// Array.from(new Set([23, 6, 76, 45, 45]))

// // set
// new Set()
// new Set([])
// new Set([23, 6, 76, 45, 45])

// // WeakSet
// new WeakSet()
// new WeakSet([])
// new WeakSet([{}, {}])

// // typed array
// new Int8Array(2)
// new Int8Array(32)
// new Int8Array('7654312456754')
// new Int8Array([23, 6, 76, 45, 45])
// new Int16Array(2)
// new Int16Array(32)
// new Int16Array('7654312456754')
// new Int16Array([23, 6, 76, 45, 45])
// new Int32Array(2)
// new Int32Array(32)
// new Int32Array('7654312456754')
// new Int32Array([23, 6, 76, 45, 45])
// new Uint8Array(2)
// new Uint8Array(32)
// new Uint8Array('7654312456754')
// new Uint8Array([23, 6, 76, 45, 45])
// new Uint16Array(2)
// new Uint16Array(32)
// new Uint16Array('7654312456754')
// new Uint16Array([23, 6, 76, 45, 45])
// new Uint32Array(2)
// new Uint32Array(32)
// new Uint32Array('7654312456754')
// new Uint32Array([23, 6, 76, 45, 45])
// new Float32Array(2)
// new Float32Array(32)
// new Float32Array('7654312456754')
// new Float32Array([23, 6, 76, 45, 45])
// new Float64Array(2)
// new Float64Array(32)
// new Float64Array('7654312456754')
// new Float64Array([23, 6, 76, 45, 45])

// Int8Array.from(2)
// Int8Array.from(32)
// Int8Array.from('7654312456754')
// Int16Array.from(2)
// Int16Array.from(32)
// Int16Array.from('7654312456754')
// Int32Array.from(2)
// Int32Array.from(32)
// Int32Array.from('7654312456754')
// Uint8Array.from(2)
// Uint8Array.from(32)
// Uint8Array.from('7654312456754')
// Uint16Array.from(2)
// Uint16Array.from(32)
// Uint16Array.from('7654312456754')
// Uint32Array.from(2)
// Uint32Array.from(32)
// Uint32Array.from('7654312456754')
// Float32Array.from(2)
// Float32Array.from(32)
// Float32Array.from('7654312456754')
// Float64Array.from(2)
// Float64Array.from(32)
// Float64Array.from('7654312456754')


// RegExp
// Date
// Math


// // function
// () => {}
// function() => {}
// (s) => 1;
// (s) => s;

// // object
// {}
// { test: 10 }
// Object.create({})

// // error
// new Error("")
// new EvalError("")
// new TypeError("")
// new MediaError("")
// new RangeError("")
// new SyntaxError("")
// new ReferenceError("")
// new AssertionError("")
// new WebTransportError("")
// new OverconstrainedError("")
// new SpeechSynthesisErrorEvent("")
// new GeolocationPositionError("")
// new RTCPeerConnectionIceErrorEvent("")
// new RTCPeerConnectionIceErrorEvent("")

// // BufferView
// ArrayBuffer.from()
// ArrayBuffer([])
// ArrayBuffer([8934, 8945, 65])

// // DataView
// DataView

// // toString,
// use all above usages with toString
// use all above usages with JSON.stringify

// toBufferView,
// use all above usages with toBufferView

// supportsDataView,
// nativeIsArrayBufferView,

describe('[isTypedArray tests] Tests to check if isTypedArray is functioning with most types', () => {
  let tst, written;
  before(() => {
    
  });

  after(() => { });

  it('should ', () => {
    let actual = true;
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should ', () => {
    let actual = true;
    let expected = true;
    expect(actual).to.equal(expected);
  });

});

describe('[TypedArray tests] Tests to check if TypedArray is functioning with most types', () => {
  let tst, written;
  before(() => {
    
  });

  after(() => { });

  it('should ', () => {
    let actual = true;
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should ', () => {
    let actual = true;
    let expected = true;
    expect(actual).to.equal(expected);
  });

});
