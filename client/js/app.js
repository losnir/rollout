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
        'bootstrap': '../libs/bootstrap/dist/js/bootstrap',
        'text': '../libs/text/text',
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

require(['backbone', 'views/AppUserList'], function (Backbone, AppUserListView) {
    'use strict';

    new AppUserListView();
});