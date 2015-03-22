/* jshint node: true */
'use strict';

var pickFiles = require('broccoli-static-compiler'),
    jsFileName = this.app.env === 'production' ? 'gss.min.js' : 'gss.js';

module.exports = {
  name: 'ember-cli-gss',

  contentFor: function(type, config) {
    if (type === 'head') {
      return '<link rel="stylesheet" type="text/gss" href="assets/app.gss">';
    } else if (type === 'body-footer') {
      return '<script src="assets/' + jsFileName + '"></script>';
    }
  },

  treeForPublic: function() {
    return pickFiles(this.app.bowerDirectory, {
      srcDir: '/gss/dist',
      files: [jsFileName],
      destDir: '/assets'
    });
  }
};
