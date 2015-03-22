/* jshint node: true */
'use strict';

var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'ember-cli-gss',

  contentFor: function(type, config) {
    if (type === 'head') {
      return '<link rel="stylesheet" type="text/gss" href="assets/app.gss">';
    } else if (type === 'body-footer') {
      return '<script src="assets/gss.js"></script>';
    }
  },

  treeForPublic: function() {
    return pickFiles(this.app.bowerDirectory, {
      srcDir: '/gss/dist',
      files: ['gss.js'],
      destDir: '/assets'
    });
  }
};
