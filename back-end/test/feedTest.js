const assert = require("chai").assert;

let chai = require("chai");
let chaiHttp = require('chai-http');
chai.should()
chai.use(chaiHttp);

const server = require('../app');


describe('/GET Feed Data', () => {
    it('should return an array of objects', (done) => {
      chai.request(server)
          .get('/api/feed')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
                res.body[0].should.be.an("object");
                res.body[1].should.be.an("object");
                res.body[2].should.be.an("object");
                res.body[0].should.have.all.keys(["name", "location", "text"]);
                res.body[1].should.have.all.keys(["name", "location", "text"]);
                res.body[2].should.have.all.keys(["name", "location", "text"]);
            done();
          });
    });
});