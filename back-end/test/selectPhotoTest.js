const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

describe("/PUT file", () => {
  it("Should PUT a file", (done) => {
    let file = {
      fileName: "test.jpg",
    };
    chai
      .request(server)
      .options("/public/images")
      //   .field("fileName", "test.jpg")
      // .attach('files', "/Users/Downloads/test.jpg")
      .send(file)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(204);
          /* res.body.should.be.a("object");
          res.body.should.have.property("data").eql("File Uploaded"); */
        }
        done();
      });
  });
});
