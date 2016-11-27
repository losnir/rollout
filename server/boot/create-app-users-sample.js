/**
 * Initialize the AppUser model with an inital (hardcoded) list of users.
 * 
 * @Author Nir Azuelos
 * @date   November 25th 2016
 */
module.exports = function(app) {
   app.models.AppUser.create([
      {
         name: "Andrew G"
      }, {
         name: "Eyal K"
      }, {
         name: "Kfir E"
      }, {
         name: "Sergey I"
      }, {
         name: "Erez R"
      }
   ]);
};