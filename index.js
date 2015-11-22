/* jshint node: true */
'use strict';

module.exports = {
  name: 'spinning-tomster',

  included: function(app) {
  	this._super.included(app);
  	app.import('vendor/spinning-tomster.css');
  }
};
