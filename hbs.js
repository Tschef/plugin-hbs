'use strict';

import Handlebars from 'handlebars';

const handlebarsRuntimePath = System.normalizeSync('handlebars/../handlebars.runtime.js', __moduleName );

export function translate(load) {
  var precompiled = Handlebars.precompile(load.source);
  load.source = `module.exports = require('${handlebarsRuntimePath}').template(${precompiled});`;
}
