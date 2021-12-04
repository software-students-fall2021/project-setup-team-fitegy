const server = require('../app');
const chai = require("chai");
const chaiHttp = require('chai-http');
chai.should()
chai.use(chaiHttp);

describe('/GET App Data', () => {
    it('should return Hello! This is the server for Fitegy.', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql("Hello! This is the server for Fitegy.");
            done();
          });
    });
});