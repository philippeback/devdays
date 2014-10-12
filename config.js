/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "amber_lib/showdown": "bower_components/showdown",
    "requireJS": "node_modules/requirejs/require",
    "jquery": "bower_components/jquery/jquery",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui.min",
    "bootstrap2.3.2": "bower_components/bootstrap2.3.2/bootstrap",
    "require-css": "bower_components/require-css",
    "amber_lib/es5-shim": "bower_components/es5-shim",
    "amber_lib/codemirror": "bower_components/codemirror",
    "helios": "bower_components/helios/src",
    "helios/set": "bower_components/helios/set",
    "helios/resources": "bower_components/helios/resources",
    "helios/index": "bower_components/helios/index",
    "amber": "bower_components/amber/support",
    "amber_vm": "bower_components/amber/support/deprecated-vm-files",
    "amber_vm/_st": "bower_components/amber/support/deprecated-vm-files/as-receiver",
    "amber_css": "bower_components/amber/support/resources",
    "amber_core": "bower_components/amber/src",
    "amber-devdays": "src"
  },
  "rjs_comment1": "require.min should be removed",
  "rjs_comment2": "it's backward compatibility hack if config finds",
  "rjs_comment3": "support/requirejs before node_modules/requirejs;",
  "rjs_comment4": "the former will go away in 0.14.0",
  "shim": {
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "bootstrap2.3.2/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap2.3.2/css/bootstrap"
      ]
    },
    "amber_lib/codemirror/lib/codemirror": {
      "deps": [
        "css!amber_lib/codemirror/lib/codemirror"
      ]
    },
    "amber_lib/codemirror/mode/smalltalk/smalltalk": {
      "deps": [
        "../../lib/codemirror"
      ]
    },
    "amber_lib/codemirror/addon/hint/show-hint": {
      "deps": [
        "../../lib/codemirror"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  },
  "map": {
    "*": {
      "css": "require-css/css"
    }
  }
});