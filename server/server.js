/**
 * This is the application entry point.
 *
 * @author Nir Azuelos
 */
'use strict';

/*eslint-disable indent, one-var */
var loopback = require('loopback'),
    boot     = require('loopback-boot'),
    app      = module.exports = loopback(),
    path     = require('path');
/* eslint-enable indent, one-var */

app.start = function() {
   // Start the web server.
   return app.listen(function() {
      app.emit('started');
      var baseUrl = app.get('url').replace(/\/$/, '');

      console.log('Web server listening at: %s', baseUrl);

      if(app.get('loopback-component-explorer')) {
         var explorerPath = app.get('loopback-component-explorer').mountPath;
         console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
      }
   });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
   if(err) throw err;

   // Start the server if `$ node server.js`
   if(require.main === module)
      app.start();
});
