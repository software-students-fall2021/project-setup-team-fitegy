const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
chai.should();
chai.use(chaiHttp);

describe("/GET Notification Data", () => {
  it("should return an array of objects", async (done) => {
    chai
      .request(server)
      .get("/api/notifications")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        // res.body.length.should.be.eql(10);
        /*
                res.body[0].should.be.an("object");
                res.body[1].should.be.an("object");
                res.body[2].should.be.an("object");
                res.body[0].should.have.all.keys(["name", "text"]);
                res.body[1].should.have.all.keys(["name", "text"]);
                res.body[2].should.have.all.keys(["name", "text"]);
                */
      });
  });
});
