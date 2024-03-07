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

const { expect, AssertionError } = require('chai');
const { TagTester,
  TypeTester,
  isBufferLike,
  isObject,
  isPureObject,
  isTagObject
} = require('../index');

// isBufferLike(12)
// isBufferLike("23")
// isBufferLike("23Test")
// isBufferLike(NaN)
// isBufferLike(undefined)
// isBufferLike(true)
// isBufferLike(false)
// isBufferLike(`test`)
// isBufferLike([1, 2, 3, 4])
// isBufferLike([1.2, 4, 6, 10])
// isBufferLike({})
// isBufferLike({ test: 10 })
// isBufferLike(new Set())
// isBufferLike(new Set([]))
// isBufferLike(new Set([1, 2, 3]))
// isBufferLike(() => 1)
// isBufferLike((s) => s)
// isBufferLike(() => { })
// isBufferLike(function () { })
// isBufferLike(function test() { })
// isBufferLike(new ArrayBuffer(10))
// isBufferLike(new ArrayBuffer([]))
// isBufferLike(new ArrayBuffer(new Int16Array(6)))
// isBufferLike(new ArrayBuffer(new Uint32Array(6)))
// isBufferLike(new ArrayBuffer(new BigInt64Array(6)))
// isBufferLike(new ArrayBuffer(new BigUint64Array(6)))
// isBufferLike(new ArrayBuffer(new Float32Array(6)))
// isBufferLike(new ArrayBuffer("test"))
// isBufferLike(new ArrayBuffer(""))

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

describe('[isObject tests] Tests to check if isObject is functioning with most types', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should be an object when an object type is checked', () => {
    let actual = isObject({});
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isObject({});
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object type is checked', () => {
    let actual = isObject({ "test": 10 });
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isObject(Object.create({ "test": 10 }));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isObject(Object.create({ "test": 10 }));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an array type is checked', () => {
    let actual = isObject([23, 6, 76, 45, 45]);
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an array using array constructor type is checked', () => {
    let actual = isObject(new Array([23, 6, 76, 45, 45]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an set type is checked', () => {
    let actual = isObject(new Set([23, 6, 76, 45, 45]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an weakset type is checked', () => {
    let actual = isObject(new WeakSet([{}, {}]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an typed array type is checked', () => {
    let actual = isObject(new Int32Array([23, 6, 76, 45, 45]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an typed array type is checked', () => {
    let actual = isObject(new Int32Array(5));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an typed type is checked', () => {
    let actual = isObject(new Int32Array(23, 6, 76, 45, 45));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  // it('should not be an object when an map type for object is checked', () => {
  //   let actual = isObject(new Map({ "test": 10 }));
  //   let expected = false; 
  //   expect(actual).to.equal(expected);
  // });

  it('should be an object when an map type with array[[it, it]] is checked', () => {
    let actual = isObject(new Map([["test", 10]]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an string type is checked', () => {
    let actual = isObject("jkldfsakd904390fknfv");
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an string using string contructor type is checked', () => {
    let actual = isObject(String("jkldfsakd904390fknfv"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number type is checked', () => {
    let actual = isObject(8794389);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number created using number constructor type is checked', () => {
    let actual = isObject(Number(893498043));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number created using number constructor type is checked', () => {
    let actual = isObject(Number("893498043"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an boolean type is checked', () => {
    let actual = isObject(false);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an boolean created using boolean contructor type is checked', () => {
    let actual = isObject(Boolean(false));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an null type is checked', () => {
    let actual = isObject(null);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an undefined type is checked', () => {
    let actual = isObject(undefined);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an float type is checked', () => {
    let actual = isObject(879305409549054.554);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an float using float Float32Array constructor type is checked', () => {
    let actual = isObject(Float32Array.from(879305409549054.554));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an float using float Float32Array constructor type is checked', () => {
    let actual = isObject(Float32Array.from('7654312456754'));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an bigint type is checked', () => {
    let actual = isObject(894894398430894398043908430943904590438940945095409540954905409509650956095690560956095409540939032342980459845459045980549054n);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an bigint using bigint constructor type is checked', () => {
    let actual = isObject(BigInt("8948943984308940945095409540954905409509650956095690560956095409540939032342980459845459045980549054"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

});


describe('[isTagObject tests] Tests to check if isTagObject is functioning with most types', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should be an object when an object type is checked', () => {
    let actual = isTagObject({});
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isTagObject({});
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object type is checked', () => {
    let actual = isTagObject({ "test": 10 });
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isTagObject(Object.create({ "test": 10 }));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isTagObject(Object.create({ "test": 10 }));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an array type is checked', () => {
    let actual = isTagObject([23, 6, 76, 45, 45]);
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an array using array constructor type is checked', () => {
    let actual = isTagObject(new Array([23, 6, 76, 45, 45]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an set type is checked', () => {
    let actual = isTagObject(new Set([23, 6, 76, 45, 45]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an weakset type is checked', () => {
    let actual = isTagObject(new WeakSet([{}, {}]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an typed array type is checked', () => {
    let actual = isTagObject(new Int32Array([23, 6, 76, 45, 45]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an typed array type is checked', () => {
    let actual = isTagObject(new Int32Array(5));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an typed type is checked', () => {
    let actual = isTagObject(new Int32Array(23, 6, 76, 45, 45));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  // it('should not be an object when an map type for object is checked', () => {
  //   let actual = isTagObject(new Map({ "test": 10 }));
  //   let expected = false; 
  //   expect(actual).to.equal(expected);
  // });

  it('should be an object when an map type with array[[it, it]] is checked', () => {
    let actual = isTagObject(new Map([["test", 10]]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an string type is checked', () => {
    let actual = isTagObject("jkldfsakd904390fknfv");
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an string using string contructor type is checked', () => {
    let actual = isTagObject(String("jkldfsakd904390fknfv"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number type is checked', () => {
    let actual = isTagObject(8794389);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number created using number constructor type is checked', () => {
    let actual = isTagObject(Number(893498043));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number created using number constructor type is checked', () => {
    let actual = isTagObject(Number("893498043"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an boolean type is checked', () => {
    let actual = isTagObject(false);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an boolean created using boolean contructor type is checked', () => {
    let actual = isTagObject(Boolean(false));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an null type is checked', () => {
    let actual = isTagObject(null);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an undefined type is checked', () => {
    let actual = isTagObject(undefined);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an float type is checked', () => {
    let actual = isTagObject(879305409549054.554);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an float using float Float32Array constructor type is checked', () => {
    let actual = isTagObject(Float32Array.from(879305409549054.554));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an float using float Float32Array constructor type is checked', () => {
    let actual = isTagObject(Float32Array.from('7654312456754'));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an bigint type is checked', () => {
    let actual = isTagObject(894894398430894398043908430943904590438940945095409540954905409509650956095690560956095409540939032342980459845459045980549054n);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an bigint using bigint constructor type is checked', () => {
    let actual = isTagObject(BigInt("8948943984308940945095409540954905409509650956095690560956095409540939032342980459845459045980549054"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

});

