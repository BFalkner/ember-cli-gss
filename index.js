/* jshint node: true */
'use strict';

var pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees');

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
    var gssJS = pickFiles(this.app.bowerDirectory, {
          srcDir: '/gss/dist',
          files: [this.jsFileName],
          destDir: '/assets'
        }),
        appGSS = pickFiles(this.app.trees.styles, {
          srcDir: '',
          files: ['app.gss'],
          destDir: '/assets'
        });

    return mergeTrees([gssJS, appGSS]);
  }
};
