const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

describe("/GET Post Data", () => {
  it("should return an array of objects", (done) => {
    chai
      .request(server)
      .options("/api/createPost")
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
  });
});
