'use strict';

var chai = require('chai');
var expect = chai.expect;

var decimalFormatter = require('../../lib/decimal-formatter');

describe('lib/decimal-formatter', function() {

  describe('decimalFormatter', function() {
    it('with Math.round', function() {
      var format = decimalFormatter('.', 3, Math.round);
      expect(format(0)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(1)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(1.12)).to.deep.equal({ roundUp: 0, text: '.120' });
      expect(format(1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.1234)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.1235)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(1.1236)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(1.9994)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(1.9995)).to.deep.equal({ roundUp: 1, text: '.000' });
      expect(format(1.9996)).to.deep.equal({ roundUp: 1, text: '.000' });
      expect(format(-1)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(-1.12)).to.deep.equal({ roundUp: 0, text: '.120' });
      expect(format(-1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1234)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1235)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1236)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(-1.9994)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(-1.9995)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(-1.9996)).to.deep.equal({ roundUp: 1, text: '.000' });
    });

    it('with Math.floor', function() {
      var format = decimalFormatter('.', 3, Math.floor);
      expect(format(0)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(1)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(1.12)).to.deep.equal({ roundUp: 0, text: '.120' });
      expect(format(1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.1234)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.1235)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.1236)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.9994)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(1.9995)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(1.9996)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(-1)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(-1.12)).to.deep.equal({ roundUp: 0, text: '.120' });
      expect(format(-1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1234)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(-1.1235)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(-1.1236)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(-1.9994)).to.deep.equal({ roundUp: 1, text: '.000' });
      expect(format(-1.9995)).to.deep.equal({ roundUp: 1, text: '.000' });
      expect(format(-1.9996)).to.deep.equal({ roundUp: 1, text: '.000' });
    });

    it('with Math.ceil', function() {
      var format = decimalFormatter('.', 3, Math.ceil);
      expect(format(0)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(1)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(1.12)).to.deep.equal({ roundUp: 0, text: '.120' });
      expect(format(1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.1234)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(1.1235)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(1.1236)).to.deep.equal({ roundUp: 0, text: '.124' });
      expect(format(1.9994)).to.deep.equal({ roundUp: 1, text: '.000' });
      expect(format(1.9995)).to.deep.equal({ roundUp: 1, text: '.000' });
      expect(format(1.9996)).to.deep.equal({ roundUp: 1, text: '.000' });
      expect(format(-1)).to.deep.equal({ roundUp: 0, text: '.000' });
      expect(format(-1.12)).to.deep.equal({ roundUp: 0, text: '.120' });
      expect(format(-1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1234)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1235)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1236)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.9994)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(-1.9995)).to.deep.equal({ roundUp: 0, text: '.999' });
      expect(format(-1.9996)).to.deep.equal({ roundUp: 0, text: '.999' });
    });

    it('when decimal length is zero', function() {
      var format = decimalFormatter('.', 0, Math.round);
      expect(format(0)).to.deep.equal({ roundUp: 0, text: '' });
      expect(format(1)).to.deep.equal({ roundUp: 0, text: '' });
      expect(format(1.12)).to.deep.equal({ roundUp: 0, text: '.12' });
      expect(format(1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(1.1234)).to.deep.equal({ roundUp: 0, text: '.1234' });
      expect(format(1.1235)).to.deep.equal({ roundUp: 0, text: '.1235' });
      expect(format(1.1236)).to.deep.equal({ roundUp: 0, text: '.1236' });
      expect(format(1.9994)).to.deep.equal({ roundUp: 0, text: '.9994' });
      expect(format(1.9995)).to.deep.equal({ roundUp: 0, text: '.9995' });
      expect(format(1.9996)).to.deep.equal({ roundUp: 0, text: '.9996' });
      expect(format(-1)).to.deep.equal({ roundUp: 0, text: '' });
      expect(format(-1.12)).to.deep.equal({ roundUp: 0, text: '.12' });
      expect(format(-1.123)).to.deep.equal({ roundUp: 0, text: '.123' });
      expect(format(-1.1234)).to.deep.equal({ roundUp: 0, text: '.1234' });
      expect(format(-1.1235)).to.deep.equal({ roundUp: 0, text: '.1235' });
      expect(format(-1.1236)).to.deep.equal({ roundUp: 0, text: '.1236' });
      expect(format(-1.9994)).to.deep.equal({ roundUp: 0, text: '.9994' });
      expect(format(-1.9995)).to.deep.equal({ roundUp: 0, text: '.9995' });
      expect(format(-1.9996)).to.deep.equal({ roundUp: 0, text: '.9996' });
    });

    it('should get correct decimal place when decimal number ia serial of ' +
    'zero', function() {
      var format = decimalFormatter('.', 2, Math.round);
      expect(format(1)).to.deep.equal({ roundUp: 0, text: '.00' });
      expect(format(0.1)).to.deep.equal({ roundUp: 0, text: '.10' });
      expect(format(0.01)).to.deep.equal({ roundUp: 0, text: '.01' });
      expect(format(0.001)).to.deep.equal({ roundUp: 0, text: '.00' });
    });
  });

});
