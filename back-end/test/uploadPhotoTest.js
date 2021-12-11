const server = require('../app');
const chai = require("chai");
const chaiHttp = require('chai-http');
chai.should()
chai.use(chaiHttp);

// describe('/GET Photo Test', () => {
//     it('Should PUT a file', (done) => {
//         let file = {
//             fileName: "test.jpg",
//         }
//         chai.request(server)
//             .put('/public/images')
//             .field('fileName', 'test.jpg')
//             .send(file)
//             .end((err, res) => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     res.should.have.status(200);
//                     res.body.should.be.a('object');
//                     res.body.should.have.property('data').eql('File Uploaded')
//                 }
//                 done();
//             })
//     })
// })

// describe('/GET Photo Test', () => {
//     it('Should receive a file', (done) => {
//         chai
//             .request(server)
//             .get("/api/photo")
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('data').eql('File Uploaded')
                
//                 done();
//             })
//     })
// })

describe('/GET Photo Data', () => {
    it('should return a file', (done) => {
      chai.request(server)
          .post('/api/uploadPhoto')
          .end((err, res) => {
                res.should.have.status(200);
                done();
          });
    });
});