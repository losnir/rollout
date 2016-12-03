var api   = require('../../setup'),
    model = "AppUsers";

describe('Model /' + model, function() {

   describe("PATCH /" + model, function() {

      it("should return 422 and respond with a json", function(done) {
         api.patch('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
      })

   });

   describe("GET /" + model, function() {

      it("should return 200 and respond with a json", function(done) {
         api.get('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
      })

   });

   describe("PUT /" + model, function() {

      it("should return 422 and respond with a json", function(done) {
         api.put('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
      })

   });

   describe("POST /" + model, function() {

      it("should return 422 and respond with a json", function(done) {
         api.post('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422, done);
      })

   });

   describe("PATCH /" + model + '/{id}', function() {

      it("should return 404 and respond with a json", function(done) {
         api.patch('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      })

   });

   describe("GET /" + model + '/{id}', function() {

      it("should return 404 and respond with a json", function(done) {
         api.get('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      })

   });

   describe("HEAD /" + model + '/{id}', function() {

      it("should return 404 and respond with a json", function(done) {
         api.head('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      })

   });

   describe("PUT /" + model + '/{id}', function() {

      it("should return 404 and respond with a json", function(done) {
         api.put('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
      })

   });

   describe("DELETE /" + model + '/{id}', function() {

      it("should return 200 and respond with a json", function(done) {
         api.delete('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
      })

   });

});
