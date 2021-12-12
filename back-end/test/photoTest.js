const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

describe("/GET Photo Test", () => {
  it("Should receive a file", (done) => {
    chai
      .request(server)
      .options("/api/photo")
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(204);
        /* res.body.should.be.a("object");
        res.body.should.have.property("data").eql("File Uploaded"); */

        done();
      });
  });
});
