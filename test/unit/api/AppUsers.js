var api   = require('../../setup'),
    chai  = require('chai'),
    model = "AppUsers";

chai.use(require('chai-json-schema'));
chai.tv4.addSchema(require('../../common/schema/AppUser'));
chai.should();

describe('Model /' + model, function() {

   describe("GET /" + model, function() {

      it("should return 200 and respond with a list of users", function(done) {
         api.get('/api/' + model)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
               res.body.should.be.jsonSchema({
                  type: 'array',
                  uniqueItems: true,
                  items: { '$ref': 'server.model.AppUser' }
               });
            })
            .end(done);
      })

   });

});
