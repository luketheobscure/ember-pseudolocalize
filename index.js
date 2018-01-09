/* eslint-env node */

module.exports = {
  name: 'ember-pseudolocalize',

  options: {
    babel: {
      plugins: ['babel-plugin-transform-object-rest-spread'],
    },
  },

  included() {
    this._super.included.apply(this, arguments); // eslint-disable-line
    this.import('node_modules/pseudoloc/pseudoloc.js');
    this.import('vendor/shims/pseudoloc.js');
  },
};
