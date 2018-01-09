(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['pseudoloc'],
      __esModule: true,
    };
  }

  define('pseudoloc', [], vendorModule);
})();
