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
        res.body.length.should.be.eql(3);
        res.body[0].should.be.an("object");
        res.body[1].should.be.an("object");
        res.body[2].should.be.an("object");
        res.body[0].should.have.all.keys([
          "title",
          "description",
          "dateRange",
          "mainIcon",
          "subIcon",
        ]);
        res.body[1].should.have.all.keys([
          "title",
          "description",
          "dateRange",
          "mainIcon",
          "subIcon",
        ]);
        res.body[2].should.have.all.keys([
          "title",
          "description",
          "dateRange",
          "mainIcon",
          "subIcon",
        ]);

        done();
      });
  });
});
