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
