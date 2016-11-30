/**
* This is the main etnry point for the front end.
* @author Nir Azuelos
*/

// Configure RequireJS (path, shim).
require.config({
   paths: {
      'jquery': '../libs/jquery/dist/jquery',
      'underscore': '../libs/underscore/underscore',
      'backbone': '../libs/backbone/backbone',
      'backbone-validation': '../libs/backbone.validation/dist/backbone-validation-amd',
      'bootstrap': '../libs/bootstrap/dist/js/bootstrap',
      'text': '../libs/requirejs-text/text',
   },
   shim: {
      'underscore': {
         exports: '_'
      },
      'backbone': {
         deps: ['underscore', 'jquery'],
         exports: 'Backbone'
      },
      'bootstrap': {
         deps: ['jquery'],
         exports: 'Bootstrap'
      },
   },
   deps: ['jquery', 'underscore']
});

require(['backbone', 'views/AppUserList', 'backbone-validation'], function (Backbone, AppUserListView) {
   'use strict';

   _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

   // Kickstart the application.
   new AppUserListView();
});