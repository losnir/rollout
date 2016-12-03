var request  = require('supertest'),
    loopback = require('loopback'),
    server   = require('../server/server'),
    api      = module.exports = request(server);