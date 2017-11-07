'use strict';

var padRight = require('@fav/text.pad-right');

function decimalFormatter(decimalPoint, decimalLen, rounding) {
  return function(num) {
    var decimalPart = String(Math.abs(num)).split('.')[1] || '';
    if (!decimalLen) {
      if (!decimalPart) {
        return { roundUp: 0, text: '' };
      }
      return { roundUp: 0, text: decimalPoint + decimalPart };
    }

    if (decimalPart.length == decimalLen) {
      return { roundUp: 0, text: decimalPoint + decimalPart };
    }

    if (decimalPart.length < decimalLen) {
      return {
        roundUp: 0,
        text: decimalPoint + padRight(decimalPart, decimalLen, '0'),
      };
    }

    var s = decimalPart.slice(0, decimalLen) + '.' + decimalPart[decimalLen];
    if (num < 0) {
      s = '-' + s;
    }
    s = String(Math.abs(rounding(Number(s))));

    if (s.length > decimalLen) {
      return { roundUp: 1, text: decimalPoint + s.slice(-decimalLen) };
    }

    return { roundUp: 0, text: decimalPoint + s };
  };

}

module.exports = decimalFormatter;
