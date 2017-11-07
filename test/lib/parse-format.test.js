'use strict';

var chai = require('chai');
var expect = chai.expect;

var parseFormat = require('../../lib/parse-format');

describe('lib/parse-format', function() {

  describe('sign', function() {
    it('Should parse sign normally', function() {
      expect(parseFormat('+9').slice(1)).to.deep
        .equal(['+', '9', '', '', '', '']);
      expect(parseFormat('-9').slice(1)).to.deep
        .equal(['-', '9', '', '', '', '']);
      expect(parseFormat('9').slice(1)).to.deep
        .equal(['', '9', '', '', '', '']);
    });

    it('Should parse sign normally when only sign', function() {
      expect(parseFormat('+').slice(1)).to.deep
        .equal(['+', '', '', '', '', '']);
      expect(parseFormat('-').slice(1)).to.deep
        .equal(['-', '', '', '', '', '']);
      expect(parseFormat('').slice(1)).to.deep
        .equal(['', '', '', '', '', '']);
    });

    it('Should return null when illegal sign', function() {
      expect(parseFormat('$9')).to.equal(null);
    });
  });

  describe('decimal part', function() {
    it('Should parse decimal part normally', function() {
      expect(parseFormat('+9.').slice(1)).to.deep
        .equal(['+', '9', '', '', '.', '']);
      expect(parseFormat('+9.0').slice(1)).to.deep
        .equal(['+', '9', '', '', '.', '0']);
      expect(parseFormat('+9.00').slice(1)).to.deep
        .equal(['+', '9', '', '', '.', '00']);
      expect(parseFormat('-.').slice(1)).to.deep
        .equal(['-', '', '', '', '.', '']);
      expect(parseFormat('-.000').slice(1)).to.deep
        .equal(['-', '', '', '', '.', '000']);
      expect(parseFormat('.').slice(1)).to.deep
        .equal(['', '', '', '', '.', '']);
      expect(parseFormat('.00').slice(1)).to.deep
        .equal(['', '', '', '', '.', '00']);
    });

    it('Should parse deimal part normally with various decimal point',
    function() {
      expect(parseFormat('9|').slice(1)).to.deep
        .equal(['', '9', '', '', '|', '']);
      expect(parseFormat('-9|0').slice(1)).to.deep
        .equal(['-', '9', '', '', '|', '0']);
      expect(parseFormat('9,.').slice(1)).to.deep
        .equal(['', '9', '', '', ',.', '']);
      expect(parseFormat('+9,.00').slice(1)).to.deep
        .equal(['+', '9', '', '', ',.', '00']);
    });

    it('Should return null when illegal decimal format', function() {
      expect(parseFormat('+9.888')).to.equal(null);
      expect(parseFormat('-9.090')).to.equal(null);
      expect(parseFormat('-9,999.9')).to.equal(null);
      expect(parseFormat('-9,999.8')).to.equal(null);
      expect(parseFormat('-9.000.')).to.equal(null);
      expect(parseFormat('-9.000.0')).to.equal(null);
    });
  });

  describe('integer part', function() {
    it('Should parse integer part', function() {
      expect(parseFormat('-9.99').slice(1)).to.deep
        .equal(['-', '9', '.', '99', '', '']);
      expect(parseFormat('9 999,000').slice(1)).to.deep
        .equal(['', '9', ' ', '999', ',', '000']);
    });

    it('Should return null when illegal integer format', function() {
      expect(parseFormat('+99')).to.equal(null);
      expect(parseFormat(',999')).to.equal(null);
      expect(parseFormat('+989')).to.equal(null);
      expect(parseFormat('+99,99')).to.equal(null);
      expect(parseFormat('+99,99.99')).to.equal(null);
    });
  });

});

