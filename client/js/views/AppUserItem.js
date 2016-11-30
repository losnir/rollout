/**
 * @author Nir Azuelos
 */
define([
   'backbone',
   'collections/AppUser',
   'text!/templates/AppUserItemView.tpl'
], function(Backbone, AppUserCollection, template) {
   'use strict';

   return Backbone.View.extend({
      tagName: 'div',

      className: 'list-group-item item clearfix',

      template: _.template(template),

      events: {
         'click .remove': 'destroy',
         'click .edit': 'edit',
      },

      initialize: function() {
         // Register model event handlers.
         this.listenTo(this.model, 'change', this.render);
         this.listenTo(this.model, 'edit', this.edit);
         this.listenTo(this.model, 'destroy', this.remove);
      },

      /**
       * Render the view using the supplied template.
       * Returns `this` for chaining.
       */
      render: function() {
         this.$el.html(this.template(this.model.toJSON()));
         return this;
      },

      /**
       * Perform an edit operation.
       * We prompt the client for a new name, and if it is sane, save it to the underlying model.
       */
      edit: function() {
         var oldName = this.model.get("name"),
             newName = prompt("Please enter a new name:", oldName);

         if(newName === null || newName.trim() == oldName.trim())
            return;

         this.model.save({ name: newName }, {
            patch: true, // Perform a PATCH requst rather than a PUT.
            error: function(error) {
              alert("An error occured while saving: " + error);
            }
         });

         if(!this.model.isValid()) {
            var error = this.model.validationError ? _.values(this.model.validationError).join(', ') : "Unknown";
            alert("An error occured while saving: " + error);
         }
      },

      /**
       * Destroy the underlying model.
       * This will be called upon teardown of the view.
       */ 
      destroy: function() {
         this.model.destroy();
      },

   });
});