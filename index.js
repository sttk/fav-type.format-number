'use strict';

var isString = require('@fav/type.is-string');
var isFunction = require('@fav/type.is-function');
var isFiniteNumber = require('@fav/type.is-finite-number');
var toInteger = require('@fav/type.to-integer');

var parseFormat = require('./lib/parse-format');
var signFormatter = require('./lib/sign-formatter');
var integerFormatter = require('./lib/integer-formatter');
var decimalFormatter = require('./lib/decimal-formatter');
var formatEmpty = require('./lib/format-empty');

function formatNumber(format, rounding) {
  if (!isString(format)) {
    return formatEmpty;
  }

  if (!isFunction(rounding)) {
    rounding = Math.round;
  }

  var parsed = parseFormat(format);
  if (!parsed) {
    return formatEmpty;
  }

  var formatSign = signFormatter(parsed[1]);

  var formatDecimal, intRounding
  if (parsed[5]) {
    formatDecimal = decimalFormatter(parsed[5], parsed[6].length, rounding);
    intRounding = toInteger;
  } else {
    intRounding = rounding;
  }

  var formatInteger;
  if (parsed[2]) {
    formatInteger = integerFormatter(parsed[3], parsed[4].length, intRounding);
  } else {
    formatInteger = formatEmpty;
  }

  return function(num) {
    if (!isFiniteNumber(num)) {
      return '';
    }

    var sign = formatSign(num);

    if (!formatDecimal) {
      return sign + formatInteger(num, 0);
    }

    var decimal = formatDecimal(num);
    var integer = formatInteger(num, decimal.roundUp);
    return sign + integer + decimal.text;
  };
}

module.exports = formatNumber;
