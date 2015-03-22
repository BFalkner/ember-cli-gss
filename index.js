/* jshint node: true */
'use strict';

var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'ember-cli-gss',

  included: function(app) {
    this._super.included(app);

    this.jsFileName = this.app.env === 'production' ? 'gss.min.js' : 'gss.js';
  },

  contentFor: function(type, config) {
    if (type === 'head') {
      return '<link rel="stylesheet" type="text/gss" href="assets/app.gss">';
    } else if (type === 'body-footer') {
      return '<script src="assets/' + this.jsFileName + '"></script>';
    }
  },

  treeForPublic: function() {
    return pickFiles(this.app.bowerDirectory, {
      srcDir: '/gss/dist',
      files: [this.jsFileName],
      destDir: '/assets'
    });
  }
};
