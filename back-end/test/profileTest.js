const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

describe("/GET Profile Stats Data", () => {
  it("should return an object with 3 keys", (done) => {
    chai
      .request(server)
      .get("/api/profile")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.map((ele) => {
          ele.should.be.an("object");
          if (ele.keys !== undefined) {
            ele.should.have.all.keys(["ongoing", "done", "points"]);
          }
        });
        done();
      })
      .timeout(20000);
  });
});
