/* jshint node: true */
'use strict';

import config from '../config/environment';

module.exports = {
  name: 'recurly-service',
  contentFor: function(type) {
    // we use body since Recurly must be available before
    // if (type === 'body' && !config.recurly.delayLoading) {
    //   return '<script type="text/javascript" src="https://js.recurly.com/v3/recurly.js"></script>';
    // }
  }
};
