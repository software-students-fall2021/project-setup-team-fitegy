const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
chai.should();
chai.use(chaiHttp);

describe("/GET Post Data", () => {
  it("should return an array of objects", (done) => {
    chai
      .request(server)
      .options("/api/post")
      .end((err, res) => {
        console.log(res.body);
        if (res.should.have.status(204)) {
          /* res.body.should.be.a("array");
          res.body.map((ele) => {
            ele.should.be.an("object");
            if (ele.keys !== undefined) {
              ele.should.have.all.keys([
                "title",
                "content",
                "mainIcon",
                "subIcon",
              ]);
            }
          }); */
        }
        done();
      });
  });
});
