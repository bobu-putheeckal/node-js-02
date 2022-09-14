const supertest = require("supertest");
const expect = require("chai").expect;
const app = require("../src/index");

describe("Basic Testing", function () {
  it("expect 200 status for root path", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).to.eq(200);
  });
});
