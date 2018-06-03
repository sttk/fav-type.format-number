(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.type||(g.type = {}));g.formatNumber = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

  var formatDecimal, intRounding;
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

},{"./lib/decimal-formatter":2,"./lib/format-empty":3,"./lib/integer-formatter":4,"./lib/parse-format":5,"./lib/sign-formatter":6,"@fav/type.is-finite-number":10,"@fav/type.is-function":11,"@fav/type.is-string":12,"@fav/type.to-integer":13}],2:[function(require,module,exports){
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

    if (decimalPart.length === decimalLen) {
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

},{"@fav/text.pad-right":7}],3:[function(require,module,exports){
'use strict';

function formatEmpty() {
  return '';
}

module.exports = formatEmpty;

},{}],4:[function(require,module,exports){
'use strict';

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

},{}],5:[function(require,module,exports){
'use strict';

function parseFormat(format) {
  var parsed = /^([\+\-]?)(9?)([^0-9]*)(9*)([^0-9]*)(0*)$/.exec(format);
  if (!parsed) {
    return null;
  }
  if (parsed[3] && !parsed[4]) {
    // There is no case because parsed[3] and parsed[5] are combined
    // when parsed[4] is none.
    // if (parsed[5]) { return null; }

    parsed[5] = parsed[3];
    parsed[3] = '';
  }
  if (parsed[3] && !parsed[2]) {
    return null;
  }
  if (parsed[4] && (!parsed[2] || !parsed[3])) {
    return null;
  }
  return parsed;
}

module.exports = parseFormat;

},{}],6:[function(require,module,exports){
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

},{"./format-empty":3}],7:[function(require,module,exports){
'use strict';

var padRight;

/* istanbul ignore if */
if (!Boolean(String.prototype.padEnd)) {
  padRight = require('./lib/pad-right');
} else {
  padRight = function(source, length, padding) {
    return source.padEnd(length, padding || ' ');
  };
}

module.exports = padRight;

},{"./lib/pad-right":8}],8:[function(require,module,exports){
'use strict';

var repeat = require('@fav/text.repeat');

function padRight(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (!padding) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length);
  var pads = repeat(padding, padsNum).slice(0, padsLen);

  return source + pads;
}

module.exports = padRight;

},{"@fav/text.repeat":9}],9:[function(require,module,exports){
'use strict';

function repeat(source, ntimes) {
  if (ntimes < 1) {
    return '';
  }

  var unitlen = source.length;
  var halftime = Math.ceil(ntimes / 2);

  var i;
  for (i = 1; i < halftime; i += i) {
    source += source;
  }

  return source + source.slice(0, (ntimes - i) * unitlen);;
}

module.exports = repeat;

},{}],10:[function(require,module,exports){
'use strict';

function isFiniteNumber(value) {
  if (typeof value === 'number') {
    return isFinite(value);
  }
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return isFinite(value);
  }
  return false;
}

function isNotFiniteNumber(value) {
  return !isFiniteNumber(value);
}

Object.defineProperty(isFiniteNumber, 'not', {
  enumerable: true,
  value: isNotFiniteNumber,
});

module.exports = isFiniteNumber;

},{}],11:[function(require,module,exports){
'use strict';

function isFunction(value) {
  return (typeof value === 'function');
}

function isNotFunction(value) {
  return (typeof value !== 'function');
}

Object.defineProperty(isFunction, 'not', {
  enumerable: true,
  value: isNotFunction,
});

module.exports = isFunction;

},{}],12:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

function isNotString(value) {
  return !isString(value);
}

Object.defineProperty(isString, 'not', {
  enumerable: true,
  value: isNotString,
});

module.exports = isString;

},{}],13:[function(require,module,exports){
'use strict';

var isFiniteNumber = require('@fav/type.is-finite-number');
var toNumber = require('@fav/type.to-number');

function toInteger(value) {
  value = toNumber(value);

  if (isFiniteNumber(value)) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }

  if (arguments.length > 1) {
    return arguments[1];
  }

  return NaN;
}

module.exports = toInteger;

},{"@fav/type.is-finite-number":10,"@fav/type.to-number":14}],14:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');

function toNumber(value) {
  if (typeof value === 'number') {
    if (value === value) {
      return value;
    }

  } else if (isString(value)) {
    if (value && !/ /.test(value)) {
      value = Number(value);
      if (value === value) {
        return value;
      }
    }
  }

  if (arguments.length > 1) {
    return arguments[1];
  }
  return NaN;
}

module.exports = toNumber;

},{"@fav/type.is-string":12}]},{},[1])(1)
});
