requirejs.config({
  paths: {
    'lodash': '../bower_components/lodash/dist/lodash',
    'q': '../bower_components/q/q',
    'knockout': '../bower_components/knockout.js/knockout.debug',
    'text': '../bower_components/requirejs-text/text',
    'knockout-mapping': '../bower_components/knockout-mapping/knockout.mapping',
    'jquery': '../bower_components/jquery/jquery',
    'durandal': '../bower_components/durandal/js',
    'plugins' : '../bower_components/durandal/js/plugins',
    'backend': 'backend'
  }
});

define(function (require) {
  var system = require('durandal/system');
  var http = require('plugins/http');
  system.debug(true);
  var app = require('durandal/app');
  var viewLocator = require('durandal/viewLocator');
  app.title = 'cutter';
  app.configurePlugins({router: true});
  app.start().then(function() {
    viewLocator.useConvention();
    app.setRoot('viewmodels/shell');
  });
});
