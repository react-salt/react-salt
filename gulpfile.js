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

const requireDir = require('require-dir');

requireDir('./gulp/tasks', {
  recurse: true
})
