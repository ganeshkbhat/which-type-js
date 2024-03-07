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
  isString 
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

describe('[isString tests] Tests to check if isString is functioning with most types', () => {
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
