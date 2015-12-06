'use strict';

var through = require('through2');

module.exports = function handlebarsStripComments(options) {
  options = options || {};

  function stripComments(file, encoding, callback) {
    var options = setup(opts || {});

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(createError(file, 'Streaming not supported'));
    }
/*
    if (file.sourceMap) {
      options.outSourceMap = file.relative;
    }

    var originalContents = String(file.contents);

    var mangled = trycatch(function () {
      var m = uglify.minify(String(file.contents), options);
      m.code = new Buffer(m.code.replace(reSourceMapComment, ''));
      return m;
    }, createError.bind(null, file));

    if (mangled instanceof PluginError) {
      return callback(mangled);
    }

    file.contents = mangled.code;

    if (file.sourceMap) {
      var sourceMap = JSON.parse(mangled.map);
      sourceMap.sources = [file.relative];
      sourceMap.sourcesContent = [originalContents];
      applySourceMap(file, sourceMap);
    }
*/

    console.log(file.contents);
    
    callback(null, file);
  }

  return through.obj(stripComments);
};
