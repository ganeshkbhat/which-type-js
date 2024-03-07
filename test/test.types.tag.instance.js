/**
 * 
 * Package: which-type-object
 * Author: Ganesh B
 * Description: 
 * Install: npm i which-type-object --save
 * Github: https://github.com/ganeshkbhat/which-type-object
 * npmjs Link: https://www.npmjs.com/package/which-type-object
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const { expect } = require('chai');
const { TagTester,
  TypeTester,
  isBufferLike 
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
// Error
// EvalError
// TypeError
// MediaError
// RangeError
// SyntaxError
// ReferenceError
// AssertionError
// WebTransportError
// OverconstrainedError
// SpeechSynthesisErrorEvent
// GeolocationPositionError
// RTCPeerConnectionIceErrorEvent
// RTCPeerConnectionIceErrorEvent

// // BufferView
// ArrayBuffer

// // DataView
// DataView

// // toString,
// use all above usages with toString
// use all above usages with JSON.stringify

// toBufferView,
// use all above usages with toBufferView

// supportsDataView,
// nativeIsArrayBufferView,

describe('[TypeTester usage tests] index.js Tests to check the type of an object using TypeTester', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  

  it('should get String type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isString = TypeTester('String');
    expect(isString("tester")).to.equal(expected);
  });

  it('should get Number type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isNumber = TypeTester('Number');
    expect(isNumber(1)).to.equal(expected);
  });

  it('should get Boolean type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isBoolean = TypeTester('Boolean');
    expect(isBoolean(true)).to.equal(expected);
  });

  it('should get Date type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isDate = TypeTester('Date');
    expect(isDate(Date.now())).to.equal(!expected);
    expect(isDate(new Date(Date.now()))).to.equal(expected);
  });

  it('should get Array type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isArray = TypeTester('Array');
    expect(isArray([1, 2, 3])).to.equal(expected);
  });
  it('should get Array type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isRegExp = TypeTester('RegExp');
    expect(isRegExp(new RegExp(/^d/g))).to.equal(expected);
    expect(isRegExp(/^d/)).to.equal(expected);
  });

  it('should get Error type checker using TypeTester', () => {
    let actual = true;
    let expected = true;
    var isError = TypeTester('Error');
    expect(isError(Error)).to.equal(!expected); // false not instantiated class
    expect(isError(new Error("Tester"))).to.equal(expected);
  });

  it('should get Symbol type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isSymbol = TypeTester('Symbol');
    expect(isSymbol(Symbol("Tester"))).to.equal(expected);
  });

  it('should get ArrayBuffer type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isArrayBuffer = TypeTester('ArrayBuffer');
    expect(isArrayBuffer([])).to.not.equal(expected); // false // is an array not ArrayBuffer
    expect(isArrayBuffer(Buffer.from([]))).to.not.equal(expected);
    expect(isArrayBuffer(new ArrayBuffer([]))).to.equal(expected);
  });

  it('should get Function type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isFunction = TypeTester('Function');
    expect(isFunction(() => { })).to.equal(expected);
  });

  it('should get DataView type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isDataView = TypeTester('DataView');
    expect(isDataView([])).to.equal(!expected);
  });

  it('should get Object type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var hasObjectTag = TypeTester('Object');
    expect(hasObjectTag({ "sc": 10 })).to.equal(expected);
  });

});
