const server = require('../app');
const chai = require("chai");
const chaiHttp = require('chai-http');
chai.should()
chai.use(chaiHttp);

describe('/GET Challenge Data', () => {
    it('should return an array of objects', (done) => {
      chai.request(server)
          .post('/api/createChallenge')
          .end((err, res) => {
                res.should.have.status(200);
                done();
          });
    });
});
