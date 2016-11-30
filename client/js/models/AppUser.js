/**
 * This is the AppUser model.
 * 
 * @author Nir Azuelos
 */
define(['underscore', 'backbone'], function(_, Backbone) {
   'use strict';

   return Backbone.Model.extend({

      validation: {
         name: {
            required: true,
            pattern: /.*\S.*/ // Match anything non white-space.
         }
      },
      
   });
});