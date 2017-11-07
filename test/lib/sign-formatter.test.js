'use strict';

var chai = require('chai');
var expect = chai.expect;

var signFormatter = require('../../lib/sign-formatter');

describe('lib/sign-formatter', function() {
  describe('plus or minus', function() {
    var format = signFormatter('+');

    it('Should return "+" when a number is positive', function() {
      expect(format(1)).to.equal('+');
      expect(format(99.9)).to.equal('+');
    });

    it('Should return "+" when a number is zero', function() {
      expect(format(0)).to.equal('+');
      expect(format(0.00)).to.equal('+');
    });

    it('Should return "-" when a number is negative', function() {
      expect(format(-1)).to.equal('-');
      expect(format(-0.01)).to.equal('-');
    });
  });

  describe('empty or minus', function() {
    var format = signFormatter('-');

    it('Should return "" when a number is positive', function() {
      expect(format(1)).to.equal('');
      expect(format(99.9)).to.equal('');
    });

    it('Should return "" when a number is zero', function() {
      expect(format(0)).to.equal('');
      expect(format(0.00)).to.equal('');
    });

    it('Should return "-" when a number is negative', function() {
      expect(format(-1)).to.equal('-');
      expect(format(-0.01)).to.equal('-');
    });
  });
});
