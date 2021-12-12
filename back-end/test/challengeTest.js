const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
chai.should();
chai.use(chaiHttp);

describe("/GET Challenge Data", () => {
  it("should return an array of objects", (done) => {
    chai
      .request(server)
      .get("/api/challenge")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.map((ele) => {
          ele.should.be.an("object");
          if (ele.keys !== undefined) {
            ele.should.have.all.keys(["title", "description", "date"]);
          }
        });
        done();
      })
      .timeout(20000);
  });
});
