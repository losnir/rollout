/**
 * This file is a part of the testing procedures.
 * A setup / boilerplate file to be included by Mocha.js test files.
 *
 * @author Nir Azuelos
 */
'use strict';

var   request  = require('supertest-as-promised'),
      loopback = require('loopback'),
      server   = require('../server/server'),
      api      = module.exports = request(server);
