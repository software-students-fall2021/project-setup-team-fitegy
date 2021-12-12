const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

describe("/GET Create Challenge Data", () => {
  it("should return a confirmation route has been called", (done) => {
    chai
      .request(server)
      .options("/api/createChallenge")
      .end((err, res) => {
        res.should.have.status(204);

        done();
      });
  });
});
