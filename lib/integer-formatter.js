'use strict';

var formatEmpty = require('./format-empty');

function integerFormatter(sep, place, rounding) {
  return function(num, roundUp) {
    var str = String(Math.abs(rounding(num)) + roundUp);
    if (!sep || !place) {
      return str;
    }

    var ret = str.slice(-place);
    for (var i = str.length - place; i > 0; i -= place) {
      ret = str.slice(Math.max(0, i - place), i) + sep + ret;
    }
    return ret;
  };
}

module.exports = integerFormatter;
