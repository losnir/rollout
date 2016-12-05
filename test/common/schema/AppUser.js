/**
 * A Tiny Validator 4 JSON schema used for validation within unit tests.
 *
 * @author Nir Azuelos
 */
'use strict';
module.exports = {
   id:    'server.model.AppUser',
   title: 'AppUser Schema',
   type:  'object',

   required: ['id', 'name'],

   properties: {
      id:   { type: 'number' },
      name: { type: 'string' },
   },
};
