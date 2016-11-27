/**
 * @author Nir Azuelos
 */
define([
   'backbone',
   'collections/AppUser',
   'views/AppUserItem',
   'text!/templates/AppUserListView.tpl'
], function(Backbone, AppUserCollection, AppUserItemView, template) {
   'use strict';

   return Backbone.View.extend({
      el: '.main-app',
      
      template: _.template(template),

      initialize: function() {
         this.users = new AppUserCollection();

         this.listenTo(this.users, 'reset', this.renderCollection);



         // Fetch & update the collection as a bulk operation using the `reset` attribute.
         this.users.fetch({ reset: true });

         this.render();
      },

      render: function() {
         this.$el.html(this.template({}));
      },

      renderSingleItem: function(AppUser) {
         var item = new AppUserItemView({ model: AppUser });
         this.$el.find('.list-group')[0].append(item.render().el);
      },

      renderCollection: function() {
         this.render();
         this.users.each(this.renderSingleItem, this);
      },

      teardown: function() {
         while(this.el.firstChild)
            this.el.removeChild(this.el.firstChild);
      }

   });
});