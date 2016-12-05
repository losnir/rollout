/**
 * This file is a part of the testing procedures.
 *
 * Test/Unit/API/AppUsers
 *
 * @author Nir Azuelos
 */
'use strict';

var   api   = require('../../setup'),
      chai  = require('chai'),
      model = 'AppUsers';

chai.use(require('chai-json-schema'));
chai.tv4.addSchema(require('../../common/schema/AppUser'));
chai.should();

describe('Model /' + model, function() {

   var AppUserTest;

   before(function(done) {
      AppUserTest = {
         name: 'Rick Sanchez',
      };
      done();
   });

   describe('GET', function() {

      it('should return 200 and respond with a list of users', function() {
         return api.get('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
               res.body.should.be.jsonSchema({
                  type:        'array',
                  uniqueItems: true,
                  items:       { '$ref': 'server.model.AppUser' },
               });
            });
      });

   });

   describe('POST', function() {

      it('should return 200 and respond with an AppUser object', function() {

         return api.post('/api/' + model)
            .send(AppUserTest)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
               res.body.should.be.jsonSchema({
                  '$ref': 'server.model.AppUser',
               });
               AppUserTest.id = res.body.id;
            })
            .then(function(res) {
               return api.get('/api/' + model + '/' + AppUserTest.id)
                  .set('Accept', 'application/json')
                  .expect('Content-Type', /json/)
                  .expect(200)
                  .expect(function(res) {
                     res.body.should.be.jsonSchema({
                        '$ref': 'server.model.AppUser',
                     });
                     res.body.id.should.equal(AppUserTest.id);
                     res.body.name.should.equal(AppUserTest.name);
                  });
            });

      });

      it('should return 422 provided that field `name` is empty', function() {
         return api.post('/api/' + model)
            .send({ name: '' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422);
      });

   });

   describe('HEAD /{id}', function() {

      it('should return 200 provided that the object exists', function() {

         if(!Number.isInteger(+AppUserTest.id)) {
            this.skip();
            return;
         }

         return api.head('/api/' + model + '/' + AppUserTest.id)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
      });

      it("should return 404 provided that the model doesn't exist", function() {
         return api.head('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404);
      });

   });

   describe('PATCH /{id}', function() {

      it('should return 200 and update model provided that it exist', function() {

         if(!Number.isInteger(+AppUserTest.id)) {
            this.skip();
            return;
         }

         var mortySmith = 'Morty Smith';

         return api.patch('/api/' + model + '/' + AppUserTest.id)
            .send({ name: mortySmith })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
               res.body.should.be.jsonSchema({
                  '$ref': 'server.model.AppUser',
               });
               res.body.id.should.equal(AppUserTest.id);
               res.body.name.should.equal(mortySmith);
            })
            .then(function(res) {
               return api.get('/api/' + model + '/' + AppUserTest.id)
                  .set('Accept', 'application/json')
                  .expect('Content-Type', /json/)
                  .expect(200)
                  .expect(function(res) {
                     res.body.should.be.jsonSchema({
                        '$ref': 'server.model.AppUser',
                     });
                     res.body.id.should.equal(AppUserTest.id);
                     res.body.name.should.equal(mortySmith);
                  });
            })
            .then(function() {
               AppUserTest.name = mortySmith;
            });

      });

      it('should return 422 provided that field `name` is empty', function() {

         if(!Number.isInteger(+AppUserTest.id)) {
            this.skip();
            return;
         }

         return api.patch('/api/' + model + '/' + AppUserTest.id)
            .send({ name: '' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422);
      });

      it("should return 404 provided that the model doesn't exist", function() {
         return api.patch('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404);
      });

   });

   describe('DELETE /{id}', function() {

      it('should return 200 and delete a single object from storage', function() {

         if(!Number.isInteger(+AppUserTest.id)) {
            this.skip();
            return;
         }

         return api.delete('/api/' + model + '/' + AppUserTest.id)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
               res.body.count.should.equal(1);
            })
            .then(function(res) {
               return api.patch('/api/' + model + '/' + AppUserTest.id)
                  .set('Accept', 'application/json')
                  .expect('Content-Type', /json/)
                  .expect(404);
            });

      });

      it("should return 200 with `count = 0` provided that the model doesn't exist", function() {
         return api.delete('/api/' + model + '/-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
               res.body.count.should.equal(0);
            });
      });

   });

});
