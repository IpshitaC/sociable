'use strict';

var i18n = require('i18next');

var i18nOptions = {
  debug : false,

  preload : ['en'],

  resSetPath : 'i18n/__lng__.json',
  resGetPath : 'i18n/__lng__.json',

  sendMissingTo : 'fallback',
  saveMissing   : true,
  fallbackLng   : 'en',

  detectLngFromHeaders : true,
  useCookie : false,

  dynamicLoad : true
};

module.exports = function(app) {

  i18n.init(i18nOptions, function(err) {
    if (err)
      console.warn('error initializing i18n module');
    else
      console.log('i18n module initialized');
  });

  app.use(i18n.handle);
  i18n.registerAppHelper(app);
};
