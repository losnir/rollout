/**
 * This is the AppUser collection.
 *
 * @author Nir Azuelos
 */
define(['models/AppUser', 'backbone'], function(AppUserModel, Backbone) {
   'use strict';

   return Backbone.Collection.extend({
      url: '/api/AppUsers',
      model: AppUserModel
   });
});