'use strict;'
require('babel-register')({
  "presets": [ 'es2015' ],
  "plugins": [
    "add-module-exports",
    "transform-es2015-modules-umd"
  ]
});

var app = require('./server/main.js');

app.start(function(err) {
    console.log('server is running');
});
