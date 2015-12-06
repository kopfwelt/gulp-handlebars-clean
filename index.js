'use strict';

var through = require('through2');

module.exports = function handlebarsStripComments(options) {

  function stripComments(file, encoding, callback) {
    var options = options || {};

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(createError(file, 'Streaming not supported'));
    }

    var originalContents = String(file.contents);
    var strippedContents = new Buffer(originalContents
      .replace(/\{\{!--[^]*?--\}\}/gm, '')
      .replace(/^\s*[\r\n]/gm, '')
    );
    file.contents = strippedContents;
    
    callback(null, file);
  }

  return through.obj(stripComments);
};
