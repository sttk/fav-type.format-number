# [@fav/type.format-number][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Convert a number to a string in various number formats.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/type.format-number
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/type.format-number/` directory manually.*


## Usage

For Node.js:

```js
var formatNumber = require('@fav/type.format-number');
var format1 = formatNumber('-9,999.00');
format1(12345.678); // => '12,345.68'
format1(-12345.678, Math.floor); // => '-12,345.68'

var format2 = formatNumber('9.');
format2(9.87654321); // => '9.87654321'
format2(-9.87654321); // => '9.87654321'  
```

For Web browsers:

```html
<script src="fav.type.format-date.min.js"></script>
<script>
var formatNumber = fav.type.formatNumber;

var format1 = formatNumber('-9,999.00');
format1(12345.678); // => '12,345.68'
format1(-12345.678, Math.floor); // => '-12,345.68'

var format2 = formatNumber('9.');
format2(9.87654321); // => '9.87654321'
format2(-9.87654321); // => '9.87654321'  
</script>
```


## API

### <u>formatNumber(format [, rounding]) : function</u>

Creates a number format function which convert a number to a string in the specified format.

#### Parameters:

| Parameter |   Type   | Description                                      |
|-----------|:--------:|--------------------------------------------------|
| format    | string   | A number format string as follows.               |
| rounding  | function | A rounding function. (Optional, and `Math.round` in default.) |

##### Number format

The regular expression of number format is as follows:

`/^([\+\-]?)(9?)([^0-9]*)(9*)([^0-9]*)(0*)$/`

* `([\+\-]?)` represents signs.
* `(9?)([^0-9]*)(9*)` represents integer part, and `([^0-9]*)` in it represents place separator.
* `([^0-9]*)(0*)` represents decimal part, and `([^0-9]*)` in it represents decimal point.

Following table is a set of examples of number formats:

| Format     | Example (positive) | Example (negative) |
|------------|--------------------|--------------------|
| `'+9'`     | `123.4 => '+123'`  | `-123.4 => '-123'` |
| `'-9'`     | `123.4 => '123'`   | `-123.4 => '-123'` |
| `'9'`      | `123.4 => '123'`   | `-123.4 => '123'`  |
| `'+9.000'` | `123.4 => '+123.400'` | `-123.4 => '-123.400'` |
| `'-9.000'` | `123.4 => '123.400'`  | `-123.4 => '-123.400'` |
| `'9.000'`  | `123.4 => '123.400'`  | `-123.4 => '123.400'`  |
| `'+9,999'` | `1234.1 => '+1,234'`  | `-1234.1 => '-1,234'`  |
| `'-9 99'`  | `1234.1 => '12 34'`   | `-1234.1 => '-12 34'`  |
| `'9_9999'` | `12345.1 => '1_2345'` | `-12345.1 => '1_2345'` |
| `'+9,999.000'` | `12345.1` => `'+12,345.100'` | `-12345.1 => '-12,345.100'` |
| `'-9.999,000'` | `12345.1` => `'12.345,100'`  | `-12345.1 => '-12.345,100'` |
| `'9 999.000'`  | `12345.1` => `'12 345.100'`  | `-12345.1 => '12 345.100'`  |

#### Returns:

A formatted string which represents the specified date.

**Type:** string


## Checked                                                                      

### Node.js (4〜8)

| Platform  |   4    |   5    |   6    |   7    |   8    |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type.format-number/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.format-number
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.format-number.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type.format-number
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type.format-number?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type-format-number
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type.format-number/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type.format-number?branch=master
