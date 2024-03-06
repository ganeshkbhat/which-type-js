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
  isArray
} = require('../index');


describe('[isArray tests] Tests to check if isArray is functioning with most types', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should be an array when an array type is checked', () => {
    let actual = isArray([]);
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an array when an array type is checked', () => {
    let actual = isArray([2, 54, "9ire", true, 3984.54]);
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an array when an array constructor based array type is checked', () => {
    let actual = isArray(Array.from([2, 54, "9ire", true, 3984.54]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an array when an array constructor based array type is checked', () => {
    let actual = isArray(new Array([2, 54, "9ire", true, 3984.54]));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an object type is checked', () => {
    let actual = isArray({});
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an object constructor based object type is checked', () => {
    let actual = isArray(Object.create({ "test": 10 }));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an object constructor based object type is checked', () => {
    let actual = isArray(Object.create({ "test": 10 }));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an set type is checked', () => {
    let actual = isArray(new Set([23, 6, 76, 45, 45]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an weakset type is checked', () => {
    let actual = isArray(new WeakSet([{}, {}]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an array when an typed array type is checked', () => {
    let actual = isArray(new Int32Array([23, 6, 76, 45, 45]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an array when an typed array type is checked', () => {
    let actual = isArray(new Int32Array(5));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an typed type is checked', () => {
    let actual = isArray(new Int32Array(23, 6, 76, 45, 45));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  // it('should not be an object when an map type for object is checked', () => {
  //   let actual = isArray(new Map({ "test": 10 }));
  //   let expected = false; 
  //   expect(actual).to.equal(expected);
  // });

  it('should not be an array when an map type with array[[it, it]] is checked', () => {
    let actual = isArray(new Map([["test", 10]]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an string type is checked', () => {
    let actual = isArray("jkldfsakd904390fknfv");
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an string using string contructor type is checked', () => {
    let actual = isArray(String("jkldfsakd904390fknfv"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an number type is checked', () => {
    let actual = isArray(8794389);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an number created using number constructor type is checked', () => {
    let actual = isArray(Number(893498043));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an number created using number constructor type is checked', () => {
    let actual = isArray(Number("893498043"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an boolean type is checked', () => {
    let actual = isArray(false);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an boolean created using boolean contructor type is checked', () => {
    let actual = isArray(Boolean(false));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an null type is checked', () => {
    let actual = isArray(null);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an undefined type is checked', () => {
    let actual = isArray(undefined);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an float type is checked', () => {
    let actual = isArray(879305409549054.554);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an float using float Float32Array constructor type is checked', () => {
    let actual = isArray(new Float32Array(2));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an float using float Float32Array constructor type is checked', () => {
    let actual = isArray(new Float32Array([2, 32]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an bigint type is checked', () => {
    let actual = isArray(894894398430894398043908430943904590438940945095409540954905409509650956095690560956095409540939032342980459845459045980549054n);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an array when an bigint using bigint constructor type is checked', () => {
    let actual = isArray(BigInt("8948943984308940945095409540954905409509650956095690560956095409540939032342980459845459045980549054"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

});
