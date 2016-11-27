/**
 * @author Nir Azuelos
 */
define(['underscore', 'backbone'], function(_, Backbone) {
   'use strict';

   return Backbone.Model.extend({
      defaults: {
         name: null,
         id: 0
      },

      validate: function(attrs) {
         if(!attrs.name)
            return false;
      }
   });
});