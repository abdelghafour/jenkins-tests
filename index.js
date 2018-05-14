// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const lib = require('./lib');

const app = lib.initApp();

module.exports = app;
