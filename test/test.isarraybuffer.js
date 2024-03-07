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
  ArrayBuffer
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


describe('[ArrayBuffer tests] Tests to check if ArrayBuffer is functioning with most types', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should not be an array buffer when an array type is checked', () => {
    let actual = ArrayBuffer([]);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an array type is checked', () => {
    let actual = ArrayBuffer([2, 54, "9ire", true, 3984.54]);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an array constructor based array type is checked', () => {
    let actual = ArrayBuffer(Array.from([2, 54, "9ire", true, 3984.54]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an array constructor based array type is checked', () => {
    let actual = ArrayBuffer(new Array([2, 54, "9ire", true, 3984.54]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an object type is checked', () => {
    let actual = ArrayBuffer({});
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an object constructor based object type is checked', () => {
    let actual = ArrayBuffer(Object.create({ "test": 10 }));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an object constructor based object type is checked', () => {
    let actual = ArrayBuffer(Object.create({ "test": 10 }));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an set type is checked', () => {
    let actual = ArrayBuffer(new Set([23, 6, 76, 45, 45]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an weakset type is checked', () => {
    let actual = ArrayBuffer(new WeakSet([{}, {}]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an typed array type is checked', () => {
    let actual = ArrayBuffer(new Int32Array([23, 6, 76, 45, 45]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an typed array type is checked', () => {
    let actual = ArrayBuffer(new Int32Array(5));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an typed type is checked', () => {
    let actual = ArrayBuffer(new Int32Array(23, 6, 76, 45, 45));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  // it('should not be an object when an map type for object is checked', () => {
  //   let actual = ArrayBuffer(new Map({ "test": 10 }));
  //   let expected = false; 
  //   expect(actual).to.equal(expected);
  // });

  it('should not be an array buffer when an map type with array[[it, it]] is checked', () => {
    let actual = ArrayBuffer(new Map([["test", 10]]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an string type is checked', () => {
    let actual = ArrayBuffer("jkldfsakd904390fknfv");
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an string using string contructor type is checked', () => {
    let actual = ArrayBuffer(String("jkldfsakd904390fknfv"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an number type is checked', () => {
    let actual = ArrayBuffer(8794389);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an number created using number constructor type is checked', () => {
    let actual = ArrayBuffer(Number(893498043));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an number created using number constructor type is checked', () => {
    let actual = ArrayBuffer(Number("893498043"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an boolean type is checked', () => {
    let actual = ArrayBuffer(false);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an boolean created using boolean contructor type is checked', () => {
    let actual = ArrayBuffer(Boolean(false));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an null type is checked', () => {
    let actual = ArrayBuffer(null);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an undefined type is checked', () => {
    let actual = ArrayBuffer(undefined);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an float type is checked', () => {
    let actual = ArrayBuffer(879305409549054.554);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an float using float Float32Array constructor type is checked', () => {
    let actual = ArrayBuffer(Float32Array.from(879305409549054.554));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an float using float Float32Array constructor type is checked', () => {
    let actual = ArrayBuffer(Float32Array.from('7654312456754'));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an bigint type is checked', () => {
    let actual = ArrayBuffer(894894398430894398043908430943904590438940945095409540954905409509650956095690560956095409540939032342980459845459045980549054n);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array buffer when an bigint using bigint constructor type is checked', () => {
    let actual = ArrayBuffer(BigInt("8948943984308940945095409540954905409509650956095690560956095409540939032342980459845459045980549054"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an array buffer when an array buffer is provided', () => {
    let actual = ArrayBuffer(new ArrayBuffer(8));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an array buffer when an array buffer constructor is used', () => {
    let actual = ArrayBuffer(new ArrayBuffer(16));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an array buffer when an array buffer constructor is used', () => {
    let actual = ArrayBuffer(new ArrayBuffer(16));
    let expected = false;
    expect(actual).to.equal(expected);
  });

});
