'use strict;'
require('babel-register')({
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": [
    "add-module-exports",
    "transform-es2015-modules-umd"
  ]
});
require("babel-polyfill");

var app = require('./server/main.js');
var config = require('config');

app.start(function(err) {
    console.log('------Server is running on Port: ' + config.port);
});
