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

      events: {
         "click .item-add .add": "create"
      },
      
      initialize: function() {
         // Start by rendering the view.
         this.render();

         // Store jQuery DOM references for easer access.
         this.$items = this.$('.items');
         this.$input = this.$('.item-add input.name');

         // Initlize a new AppUser's collection.
         this.users = new AppUserCollection();

         // Register model event handlers.
         this.listenTo(this.users, 'add', this.addSingleItem);
         this.listenTo(this.users, 'reset', this.addCollection);

         // Fetch & update the collection as a bulk operation using the `reset` attribute.
         this.users.fetch({ reset: true });
      },

      /**
       * Render the view using the supplied template.
       */
      render: function() {
         this.$el.html(this.template({}));
      },

      /**
       * Render a single AppUser instance.
       */
      addSingleItem: function(AppUser) {
         if(AppUser.isValid(true)) {
            var item = new AppUserItemView({ model: AppUser });
            this.$items.append(item.render().$el);
         }
         else console.warn("Skipped an invalid AppUser item!", AppUser);
      },

      /**
       * Render the AppUser's collection.
       * All previosuly rendered instances will be destroyed from the view.
       */
      addCollection: function() {
         this.$items.remove(".item");
         this.users.each(this.addSingleItem, this);
      },

      /*
       * Create and add a new AppUser to the collection.
       */
      create: function() {
         var name = this.$input.val().trim();

         if(name) {
            var user = this.users.create({ name: name }, { wait: true });
            
            if(!user.isValid()) {
               var error = user.validationError ? _.values(user.validationError).join(', ') : "Unknown";
               alert("An error occured while saving: " + error);
            }
         }

         this.$input.val('');
      }

   });
});