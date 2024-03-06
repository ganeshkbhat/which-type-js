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
  isObject,
  isTagObject
} = require('../index');


describe('[isObject tests] Tests to ', () => {
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


describe('[isTagObject tests] Tests to ', () => {
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
