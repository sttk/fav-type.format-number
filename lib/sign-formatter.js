'use strict';

var formatEmpty = require('./format-empty');

function signFormatter(sign) {
  switch (sign) {
    case '+': {
      return plusMinus;
    }
    case '-': {
      return minusOnly;
    }
    default: {
      return formatEmpty;
    }
  }
}

function plusMinus(num) {
  return num < 0 ? '-' : '+';
}

function minusOnly(num) {
  return num < 0 ? '-' : '';
}

module.exports = signFormatter;
