const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
chai.should();
chai.use(chaiHttp);

describe("/GET Post Data", () => {
  it("should return an array of objects", (done) => {
    chai
      .request(server)
      .get("/api/post")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(2);
        res.body[0].should.be.an("object");
        res.body[1].should.be.an("object");
        res.body[0].should.have.all.keys([
          "title",
          "content",
          "mainIcon",
          "subIcon",
        ]);
        res.body[1].should.have.all.keys([
          "title",
          "content",
          "mainIcon",
          "subIcon",
        ]);

        done();
      });
  });
});
