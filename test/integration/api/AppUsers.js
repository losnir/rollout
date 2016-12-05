/**
 * This file is a part of the testing procedures.
 *
 * Test/Integration/API/AppUsers
 *
 * @author Nir Azuelos
 */
'use strict';

var   api   = require('../../setup'),
      model = 'AppUsers';

describe('Model /' + model, function() {

   describe('PATCH', function() {

      it('should return 422 and respond with a json', function(done) {
         api.patch('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
      });

   });

   describe('GET', function() {

      it('should return 200 and respond with a json', function(done) {
         api.get('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
      });

   });

   describe('PUT', function() {

      it('should return 422 and respond with a json', function(done) {
         api.put('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
      });

   });

   describe('POST', function() {

      it('should return 422 and respond with a json', function(done) {
         api.post('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
      });

   });

   describe('PATCH /{id}', function() {

      it('should return 404 and respond with a json', function(done) {
         api.patch('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      });

   });

   describe('GET /{id}', function() {

      it('should return 404 and respond with a json', function(done) {
         api.get('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      });

   });

   describe('HEAD /{id}', function() {

      it('should return 404 and respond with a json', function(done) {
         api.head('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      });

   });

   describe('PUT /{id}', function() {

      it('should return 404 and respond with a json', function(done) {
         api.put('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      });

   });

   describe('DELETE /{id}', function() {

      it('should return 200 and respond with a json', function(done) {
         api.delete('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
      });

   });

});
