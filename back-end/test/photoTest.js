const server = require('../app');
const chai = require("chai");
const chaiHttp = require('chai-http');
chai.should()
chai.use(chaiHttp);

describe('/GET Photo Test', () => {
    it('Should receive a file', (done) => {
        chai
            .request(server)
            .get("/api/photo")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data').eql('File Uploaded')
                
                done();
            })
    })
})