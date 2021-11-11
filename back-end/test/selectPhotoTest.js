const server = require('../app');
const chai = require("chai");
const chaiHttp = require('chai-http');
chai.should()
chai.use(chaiHttp);

describe('/PUT file', () => {
    it('Should PUT a file', (done) => {
        let file = {
            fileName: "test.png",
        }
        chai.request(server)
            .put('/user/files/')
            .field('fileName', 'test.png')
            // .attach('files', "/Users/Downloads/test.png")
            .send(file)
            .end((err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data').eql('File Uploaded')
                }
                done();
            })
    })
})