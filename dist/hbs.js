define(['exports', 'handlebars'], function (exports, _handlebars) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.translate = translate;

  var _handlebars2 = _interopRequireDefault(_handlebars);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function translate(load) {
    var precompiled = _handlebars2.default.precompile(load.source);
    load.source = 'module.exports = require(\'handlebars-runtime\').template(' + precompiled + ');';
  }
});
