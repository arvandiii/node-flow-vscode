'use strict';

var _persify = require('persify');

var _persify2 = _interopRequireDefault(_persify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function square(x) {
  return x * x;
}

console.log((0, _persify2.default)(square(12)));