(function(){
'use strict';


var expect = chai.expect;



var formatNumber = fav.type.formatNumber;

describe('fav.type.format-number', function() {

  describe('sign', function() {
    it('Should return a number string normally: "+9"', function() {
      var format = formatNumber('+9');
      expect(format(0)).to.equal('+0');
      expect(format(1)).to.equal('+1');
      expect(format(-1)).to.equal('-1');
      expect(format(1.44)).to.equal('+1');
      expect(format(1.5)).to.equal('+2');
      expect(format(1.51)).to.equal('+2');
      expect(format(1.6)).to.equal('+2');
      expect(format(-1.44)).to.equal('-1');
      expect(format(-1.5)).to.equal('-1');
      expect(format(-1.51)).to.equal('-2');
      expect(format(-1.6)).to.equal('-2');
    });

    it('Should return a number string normally: "-9"', function() {
      var format = formatNumber('-9');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('-1');
      expect(format(1.44)).to.equal('1');
      expect(format(1.5)).to.equal('2');
      expect(format(1.51)).to.equal('2');
      expect(format(1.6)).to.equal('2');
      expect(format(-1.44)).to.equal('-1');
      expect(format(-1.5)).to.equal('-1');
      expect(format(-1.51)).to.equal('-2');
      expect(format(-1.6)).to.equal('-2');
    });

    it('Should return a number string normally: "9"', function() {
      var format = formatNumber('9');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('1');
      expect(format(1.44)).to.equal('1');
      expect(format(1.5)).to.equal('2');
      expect(format(1.51)).to.equal('2');
      expect(format(1.6)).to.equal('2');
      expect(format(-1.44)).to.equal('1');
      expect(format(-1.5)).to.equal('1');
      expect(format(-1.51)).to.equal('2');
      expect(format(-1.6)).to.equal('2');
    });

    it('Should return a sign normally: "+"', function() {
      var format = formatNumber('+');
      expect(format(0)).to.equal('+');
      expect(format(1)).to.equal('+');
      expect(format(-1)).to.equal('-');
      expect(format(1.44)).to.equal('+');
      expect(format(1.5)).to.equal('+');
      expect(format(1.51)).to.equal('+');
      expect(format(1.6)).to.equal('+');
      expect(format(-1.44)).to.equal('-');
      expect(format(-1.5)).to.equal('-');
      expect(format(-1.51)).to.equal('-');
      expect(format(-1.6)).to.equal('-');
    });

    it('Should return a sign normally: "-"', function() {
      var format = formatNumber('-');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('-');
      expect(format(1.44)).to.equal('');
      expect(format(1.5)).to.equal('');
      expect(format(1.51)).to.equal('');
      expect(format(1.6)).to.equal('');
      expect(format(-1.44)).to.equal('-');
      expect(format(-1.5)).to.equal('-');
      expect(format(-1.51)).to.equal('-');
      expect(format(-1.6)).to.equal('-');
    });

    it('Should return a sign normally: ""', function() {
      var format = formatNumber('');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('');
      expect(format(1.44)).to.equal('');
      expect(format(1.5)).to.equal('');
      expect(format(1.51)).to.equal('');
      expect(format(1.6)).to.equal('');
      expect(format(-1.44)).to.equal('');
      expect(format(-1.5)).to.equal('');
      expect(format(-1.51)).to.equal('');
      expect(format(-1.6)).to.equal('');
    });

    it('Should return an empty string when illegal sign: "$9"', function() {
      var format = formatNumber('$9');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('');
      expect(format(1.44)).to.equal('');
      expect(format(1.5)).to.equal('');
      expect(format(1.51)).to.equal('');
      expect(format(1.6)).to.equal('');
      expect(format(-1.44)).to.equal('');
      expect(format(-1.5)).to.equal('');
      expect(format(-1.51)).to.equal('');
      expect(format(-1.6)).to.equal('');
    });
  });

  describe('decimal part', function() {
    it('Should return a number string normally: "+9."', function() {
      var format = formatNumber('+9.');
      expect(format(0)).to.equal('+0');
      expect(format(1)).to.equal('+1');
      expect(format(-1)).to.equal('-1');
      expect(format(123.456)).to.equal('+123.456');
      expect(format(-123.456)).to.equal('-123.456');
      expect(format(0.123)).to.equal('+0.123');
      expect(format(-0.123)).to.equal('-0.123');
    });

    it('Should return a number string normally: "+9.0"', function() {
      var format = formatNumber('+9.0');
      expect(format(0)).to.equal('+0.0');
      expect(format(1)).to.equal('+1.0');
      expect(format(-1)).to.equal('-1.0');
      expect(format(123.44)).to.equal('+123.4');
      expect(format(123.45)).to.equal('+123.5');
      expect(format(123.46)).to.equal('+123.5');
      expect(format(-123.44)).to.equal('-123.4');
      expect(format(-123.45)).to.equal('-123.4');
      expect(format(-123.46)).to.equal('-123.5');
      expect(format(0.123)).to.equal('+0.1');
      expect(format(-0.123)).to.equal('-0.1');
    });

    it('Should return a number string normally: "+9.00"', function() {
      var format = formatNumber('+9.00');
      expect(format(0)).to.equal('+0.00');
      expect(format(1)).to.equal('+1.00');
      expect(format(-1)).to.equal('-1.00');
      expect(format(123.444)).to.equal('+123.44');
      expect(format(123.445)).to.equal('+123.45');
      expect(format(123.446)).to.equal('+123.45');
      expect(format(-123.444)).to.equal('-123.44');
      expect(format(-123.445)).to.equal('-123.44');
      expect(format(-123.446)).to.equal('-123.45');
      expect(format(0.123)).to.equal('+0.12');
      expect(format(-0.123)).to.equal('-0.12');
    });

    it('Should return a number string normally: "-."', function() {
      var format = formatNumber('-.');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('-');
      expect(format(123.444)).to.equal('.444');
      expect(format(123.445)).to.equal('.445');
      expect(format(123.446)).to.equal('.446');
      expect(format(-123.444)).to.equal('-.444');
      expect(format(-123.445)).to.equal('-.445');
      expect(format(-123.446)).to.equal('-.446');
      expect(format(0.123)).to.equal('.123');
      expect(format(-0.123)).to.equal('-.123');
    });

    it('Should return a number string normally: "-.000"', function() {
      var format = formatNumber('-.000');
      expect(format(0)).to.equal('.000');
      expect(format(1)).to.equal('.000');
      expect(format(-1)).to.equal('-.000');
      expect(format(123.444)).to.equal('.444');
      expect(format(123.445)).to.equal('.445');
      expect(format(123.446)).to.equal('.446');
      expect(format(-123.444)).to.equal('-.444');
      expect(format(-123.445)).to.equal('-.445');
      expect(format(-123.446)).to.equal('-.446');
      expect(format(0.123)).to.equal('.123');
      expect(format(-0.123)).to.equal('-.123');
    });

    it('Should return a number string normally: "."', function() {
      var format = formatNumber('.');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('');
      expect(format(123.444)).to.equal('.444');
      expect(format(123.445)).to.equal('.445');
      expect(format(123.446)).to.equal('.446');
      expect(format(-123.444)).to.equal('.444');
      expect(format(-123.445)).to.equal('.445');
      expect(format(-123.446)).to.equal('.446');
      expect(format(0.123)).to.equal('.123');
      expect(format(-0.123)).to.equal('.123');
    });

    it('Should return a number string normally: ".00"', function() {
      var format = formatNumber('.00');
      expect(format(0)).to.equal('.00');
      expect(format(1)).to.equal('.00');
      expect(format(-1)).to.equal('.00');
      expect(format(123.444)).to.equal('.44');
      expect(format(123.445)).to.equal('.45');
      expect(format(123.446)).to.equal('.45');
      expect(format(-123.444)).to.equal('.44');
      expect(format(-123.445)).to.equal('.44');
      expect(format(-123.446)).to.equal('.45');
      expect(format(0.123)).to.equal('.12');
      expect(format(-0.123)).to.equal('.12');
    });

    it('Should return a number string normally: "9|"', function() {
      var format = formatNumber('9|');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('1');
      expect(format(123.444)).to.equal('123|444');
      expect(format(123.445)).to.equal('123|445');
      expect(format(123.446)).to.equal('123|446');
      expect(format(-123.444)).to.equal('123|444');
      expect(format(-123.445)).to.equal('123|445');
      expect(format(-123.446)).to.equal('123|446');
      expect(format(0.123)).to.equal('0|123');
      expect(format(-0.123)).to.equal('0|123');
    });

    it('Should return a number string normally: "-9|0"', function() {
      var format = formatNumber('-9|0');
      expect(format(0)).to.equal('0|0');
      expect(format(1)).to.equal('1|0');
      expect(format(-1)).to.equal('-1|0');
      expect(format(123.44)).to.equal('123|4');
      expect(format(123.45)).to.equal('123|5');
      expect(format(123.46)).to.equal('123|5');
      expect(format(-123.44)).to.equal('-123|4');
      expect(format(-123.45)).to.equal('-123|4');
      expect(format(-123.46)).to.equal('-123|5');
      expect(format(0.123)).to.equal('0|1');
      expect(format(-0.123)).to.equal('-0|1');
    });

    it('Should return a number string normally: "-9,."', function() {
      var format = formatNumber('-9,.');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('-1');
      expect(format(123.44)).to.equal('123,.44');
      expect(format(123.45)).to.equal('123,.45');
      expect(format(123.46)).to.equal('123,.46');
      expect(format(-123.44)).to.equal('-123,.44');
      expect(format(-123.45)).to.equal('-123,.45');
      expect(format(-123.46)).to.equal('-123,.46');
      expect(format(0.123)).to.equal('0,.123');
      expect(format(-0.123)).to.equal('-0,.123');
    });

    it('Should return a number string normally: "-9,.00"', function() {
      var format = formatNumber('-9,.00');
      expect(format(0)).to.equal('0,.00');
      expect(format(1)).to.equal('1,.00');
      expect(format(-1)).to.equal('-1,.00');
      expect(format(123.444)).to.equal('123,.44');
      expect(format(123.445)).to.equal('123,.45');
      expect(format(123.446)).to.equal('123,.45');
      expect(format(-123.444)).to.equal('-123,.44');
      expect(format(-123.445)).to.equal('-123,.44');
      expect(format(-123.446)).to.equal('-123,.45');
      expect(format(0.123)).to.equal('0,.12');
      expect(format(-0.123)).to.equal('-0,.12');
    });

    it('Should return an empty string when illegal decimal format',
    function() {
      expect(formatNumber('+9.888')(123.456)).to.equal('');
      expect(formatNumber('-9.090')(123.456)).to.equal('');
      expect(formatNumber('-9,999.9')(123.456)).to.equal('');
      expect(formatNumber('-9,999.8')(123.456)).to.equal('');
      expect(formatNumber('-9.000.')(123.456)).to.equal('');
      expect(formatNumber('-9.000.0')(123.456)).to.equal('');
    });
  });

  describe('integer part', function() {
    it('Should return a number string normally: "-9.99"', function() {
      var format = formatNumber('-9.99');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('-1');
      expect(format(1.23)).to.equal('1');
      expect(format(-1.23)).to.equal('-1');
      expect(format(123.456)).to.equal('1.23');
      expect(format(123.556)).to.equal('1.24');
      expect(format(-123.456)).to.equal('-1.23');
      expect(format(-123.556)).to.equal('-1.24');
      expect(format(123456)).to.equal('12.34.56');
      expect(format(-123456)).to.equal('-12.34.56');
    });

    it('Should return a number string normally: "9 999,000"', function() {
      var format = formatNumber('9 999,000');
      expect(format(0)).to.equal('0,000');
      expect(format(1)).to.equal('1,000');
      expect(format(-1)).to.equal('1,000');
      expect(format(123)).to.equal('123,000');
      expect(format(-123)).to.equal('123,000');
      expect(format(1234)).to.equal('1 234,000');
      expect(format(-1234)).to.equal('1 234,000');
      expect(format(1.234)).to.equal('1,234');
      expect(format(-1.234)).to.equal('1,234');
      expect(format(1.2345)).to.equal('1,235');
      expect(format(-1.2345)).to.equal('1,234');
    });

    it('Should return an empty string when illegal integer format',
    function() {
      expect(formatNumber('+99')(123.456)).to.equal('');
      expect(formatNumber(',999')(123.456)).to.equal('');
      expect(formatNumber('+989')(123.456)).to.equal('');
      expect(formatNumber('+99,99')(123.456)).to.equal('');
      expect(formatNumber('+99,99.99')(123.456)).to.equal('');
    });
  });

  describe('argument', function() {
    it('Should use specified rounding function: Math.round', function() {
      var format = formatNumber('-9', Math.round);
      expect(format(123.4)).to.equal('123');
      expect(format(123.5)).to.equal('124');
      expect(format(123.6)).to.equal('124');
      expect(format(-123.4)).to.equal('-123');
      expect(format(-123.5)).to.equal('-123');
      expect(format(-123.6)).to.equal('-124');
    });

    it('Should use specified rounding function: Math.round', function() {
      var format = formatNumber('-9.0', Math.round);
      expect(format(1.94)).to.equal('1.9');
      expect(format(1.95)).to.equal('2.0');
      expect(format(1.96)).to.equal('2.0');
      expect(format(-1.94)).to.equal('-1.9');
      expect(format(-1.95)).to.equal('-1.9');
      expect(format(-1.96)).to.equal('-2.0');
    });

    it('Should use specified rounding function: Math.ceil', function() {
      var format = formatNumber('-9', Math.ceil);
      expect(format(123.4)).to.equal('124');
      expect(format(123.5)).to.equal('124');
      expect(format(123.6)).to.equal('124');
      expect(format(-123.4)).to.equal('-123');
      expect(format(-123.5)).to.equal('-123');
      expect(format(-123.6)).to.equal('-123');
    });

    it('Should use specified rounding function: Math.ceil', function() {
      var format = formatNumber('-9.0', Math.ceil);
      expect(format(1.94)).to.equal('2.0');
      expect(format(1.95)).to.equal('2.0');
      expect(format(1.96)).to.equal('2.0');
      expect(format(-1.94)).to.equal('-1.9');
      expect(format(-1.95)).to.equal('-1.9');
      expect(format(-1.96)).to.equal('-1.9');
    });

    it('Should use specified rounding function: Math.floor', function() {
      var format = formatNumber('-9', Math.floor);
      expect(format(123.4)).to.equal('123');
      expect(format(123.5)).to.equal('123');
      expect(format(123.6)).to.equal('123');
      expect(format(-123.4)).to.equal('-124');
      expect(format(-123.5)).to.equal('-124');
      expect(format(-123.6)).to.equal('-124');
    });

    it('Should use specified rounding function: Math.floor', function() {
      var format = formatNumber('-9.0', Math.floor);
      expect(format(1.94)).to.equal('1.9');
      expect(format(1.95)).to.equal('1.9');
      expect(format(1.96)).to.equal('1.9');
      expect(format(-1.94)).to.equal('-2.0');
      expect(format(-1.95)).to.equal('-2.0');
      expect(format(-1.96)).to.equal('-2.0');
    });

    it('Should use Math.round when specified illegal rounding function',
    function() {
      var format = formatNumber('-9', {});
      expect(format(123.4)).to.equal('123');
      expect(format(123.5)).to.equal('124');
      expect(format(123.6)).to.equal('124');
      expect(format(-123.4)).to.equal('-123');
      expect(format(-123.5)).to.equal('-123');
      expect(format(-123.6)).to.equal('-124');
    });

    it('Should return an empty string when argument is illegal type',
    function() {
      expect(formatNumber(undefined)(123.456)).to.equal('');
      expect(formatNumber(null)(123.456)).to.equal('');
      expect(formatNumber({})(123.456)).to.equal('');
      expect(formatNumber('-9.0')(undefined)).to.equal('');
      expect(formatNumber('-9.0')(null)).to.equal('');
      expect(formatNumber('-9.0')({})).to.equal('');
    });
  });
});

})();
