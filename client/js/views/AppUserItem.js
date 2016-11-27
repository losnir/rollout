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

      className: 'list-group-item clearfix',

      template: _.template(template),

      events: {
         'click .toggle': 'toggleCompleted',
         'dblclick label': 'edit',
         'click .remove': 'destroy',
         'keypress .edit': 'updateOnEnter',
         'keydown .edit': 'revertOnEscape',
         'blur .edit': 'close'
      },

      initialize: function() {
         this.listenTo(this.model, 'change', this.render);
         this.listenTo(this.model, 'destroy', this.remove);
         //this.listenTo(this.model, 'visible', this.toggleVisible);
      },

      render: function() {
         this.$el.html(this.template(this.model.toJSON()));
         return this;
      },

      destroy: function() {
         this.model.destroy();
      },

   });
});