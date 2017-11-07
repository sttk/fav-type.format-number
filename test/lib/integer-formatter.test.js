'use strict';

var chai = require('chai');
var expect = chai.expect;
var toInteger = require('@fav/type.to-integer');

var integerFormatter = require('../../lib/integer-formatter');

describe('lib/integer-formatter', function() {
  it('Should return integer string without separation', function() {
    var format = integerFormatter('', 0, Math.round);
    expect(format(0, 0)).to.equal('0');
    expect(format(1, 0)).to.equal('1');
    expect(format(1.4, 0)).to.equal('1');
    expect(format(1.5, 0)).to.equal('2');
    expect(format(1.6, 0)).to.equal('2');
    expect(format(-1.4, 0)).to.equal('1');
    expect(format(-1.5, 0)).to.equal('1');
    expect(format(-1.6, 0)).to.equal('2');
    expect(format(999, 0)).to.equal('999');
    expect(format(1000, 0)).to.equal('1000');
    expect(format(10000, 0)).to.equal('10000');
    expect(format(100000, 0)).to.equal('100000');
    expect(format(1000000, 0)).to.equal('1000000');
    expect(format(10000000, 0)).to.equal('10000000');
    expect(format(1000000000, 0)).to.equal('1000000000');
  });

  it('Should return integer string with separation', function() {
    var format = integerFormatter(',', 3, Math.round);
    expect(format(0, 0)).to.equal('0');
    expect(format(1, 0)).to.equal('1');
    expect(format(1.4, 0)).to.equal('1');
    expect(format(1.5, 0)).to.equal('2');
    expect(format(1.6, 0)).to.equal('2');
    expect(format(-1.4, 0)).to.equal('1');
    expect(format(-1.5, 0)).to.equal('1');
    expect(format(-1.6, 0)).to.equal('2');
    expect(format(999, 0)).to.equal('999');
    expect(format(1000, 0)).to.equal('1,000');
    expect(format(10000, 0)).to.equal('10,000');
    expect(format(100000, 0)).to.equal('100,000');
    expect(format(1000000, 0)).to.equal('1,000,000');
    expect(format(10000000, 0)).to.equal('10,000,000');
    expect(format(100000000, 0)).to.equal('100,000,000');
    expect(format(1000000000, 0)).to.equal('1,000,000,000');
  });

  it('Should return integer string with rounding up', function() {
    var format = integerFormatter('  ', 3, toInteger);
    expect(format(0, 1)).to.equal('1');
    expect(format(1, 1)).to.equal('2');
    expect(format(1.4, 1)).to.equal('2');
    expect(format(1.5, 1)).to.equal('2');
    expect(format(1.6, 1)).to.equal('2');
    expect(format(-1.4, 1)).to.equal('2');
    expect(format(-1.5, 1)).to.equal('2');
    expect(format(-1.6, 1)).to.equal('2');
    expect(format(998, 1)).to.equal('999');
    expect(format(999, 1)).to.equal('1  000');
    expect(format(1000, 1)).to.equal('1  001');
    expect(format(10000, 1)).to.equal('10  001');
    expect(format(100000, 1)).to.equal('100  001');
    expect(format(1000000, 1)).to.equal('1  000  001');
    expect(format(10000000, 1)).to.equal('10  000  001');
    expect(format(100000000, 1)).to.equal('100  000  001');
    expect(format(1000000000, 1)).to.equal('1  000  000  001');
  });
});
