/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-gss',

  included: function(app) {
    this._super.included(app);


  },

  contentFor: function(type, config) {
    if (type === 'head') {
      return '<link rel="stylesheet" type="text/gss" href="assets/app.gss">';
    } else if (type === 'body-footer') {
      return '<script src="assets/gss.js"></script>';
    }
  }
};
