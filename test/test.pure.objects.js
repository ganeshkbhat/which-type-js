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
  isPureObject
} = require('../index');


describe('[isPureObject tests] Tests to ', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should be an object when an object type is checked', () => {
    let actual = isPureObject({});
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isPureObject({});
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object type is checked', () => {
    let actual = isPureObject({ "test": 10 });
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isPureObject(Object.create({ "test": 10 }));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should be an object when an object constructor based object type is checked', () => {
    let actual = isPureObject(Object.create({ "test": 10 }));
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an array type is checked', () => {
    let actual = isPureObject([23, 6, 76, 45, 45]);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an array using array constructor type is checked', () => {
    let actual = isPureObject(new Array([23, 6, 76, 45, 45]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an set type is checked', () => {
    let actual = isPureObject(new Set([23, 6, 76, 45, 45]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an weakset type is checked', () => {
    let actual = isPureObject(new WeakSet([{}, {}]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an typed array type is checked', () => {
    let actual = isPureObject(new Int32Array([23, 6, 76, 45, 45]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an typed array type is checked', () => {
    let actual = isPureObject(new Int32Array(5));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an typed type is checked', () => {
    let actual = isPureObject(new Int32Array(23, 6, 76, 45, 45));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  // it('should not be an object when an map type for object is checked', () => {
  //   let actual = isPureObject(new Map({ "test": 10 }));
  //   let expected = false; 
  //   expect(actual).to.equal(expected);
  // });

  it('should not be an object when an map type with array[[it, it]] is checked', () => {
    let actual = isPureObject(new Map([["test", 10]]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an string type is checked', () => {
    let actual = isPureObject("jkldfsakd904390fknfv");
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an string using string contructor type is checked', () => {
    let actual = isPureObject(String("jkldfsakd904390fknfv"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number type is checked', () => {
    let actual = isPureObject(8794389);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number created using number constructor type is checked', () => {
    let actual = isPureObject(Number(893498043));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an number created using number constructor type is checked', () => {
    let actual = isPureObject(Number("893498043"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an boolean type is checked', () => {
    let actual = isPureObject(false);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an boolean created using boolean contructor type is checked', () => {
    let actual = isPureObject(Boolean(false));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an null type is checked', () => {
    let actual = isPureObject(null);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an undefined type is checked', () => {
    let actual = isPureObject(undefined);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an float type is checked', () => {
    let actual = isPureObject(8793059054.554);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an float using float Float32Array constructor type is checked', () => {
    let actual = isPureObject(new Float32Array(23));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an float using float Float32Array constructor type is checked', () => {
    let actual = isPureObject(new Float32Array([7654312456754]));
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an bigint type is checked', () => {
    let actual = isPureObject(894894398430894398043908430943904590438940945095409540954905409509650956095690560956095409540939032342980459845459045980549054n);
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should not be an object when an bigint using bigint constructor type is checked', () => {
    let actual = isPureObject(BigInt("8948943984308940945095409540954905409509650956095690560956095409540939032342980459845459045980549054"));
    let expected = false;
    expect(actual).to.equal(expected);
  });

});
