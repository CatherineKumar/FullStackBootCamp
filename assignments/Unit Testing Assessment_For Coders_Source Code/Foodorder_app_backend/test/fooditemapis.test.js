const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;
const { app } = require("../server");
const FooditemModel = require("../app/models/fooditemModel");

const originalConsoleLog = console.log;
const originalConsoleError = console.error;

describe("Fooditem APIs Tests", function () {
  var sessionToken;
  before(async () => {
    console.log = function () {};
    console.error = function () {};

    await FooditemModel.deleteMany();
    let credentials = {
      username: "testuser",
      password: "testpassword",
    };

    const res = await request(app).post("/api/v1/users/login").send(credentials);

    sessionToken = res.body.data.sessionToken;
    console.log("Token Generated", sessionToken);
  });

  after(async () => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  const testFooditem = {
    name: "testFooditem",
    description: "Test Fooditem description",
    image: "Test Fooditem Image URL",
    categoryId: "66899790b7fd322106b55e43",
    cuisineId: "66899790b7fd322106b55e50",
    isVeg: true
  };


  describe("POST /api/v1/fooditems/", async () => {
    it("should add a new fooditem", async () => {
      const res = await request(app)
        .post("/api/v1/fooditems/")
        .set("Authorization", `Bearer ${sessionToken}`)
        .send(testFooditem);

      expect(res.status).to.equal(201);
      expect(res.body.message).to.equal("Fooditem created successfully");
    });

    it("should return 401 incase token is not provided in request", async () => {
      const res = await request(app)
        .post("/api/v1/fooditems/")
        .send(testFooditem);

      expect(res.status).to.equal(401);
    });
  });
  
  describe("GET /api/v1/fooditems", function () {
    it("should return 200 OK with food items", async function () {
      const response = await request(app)
        .get("/api/v1/fooditems")
        .expect(200)
        .expect("Content-Type", /json/);

      const fooditems = response.body.data;
      expect(fooditems).to.be.an("array");
      expect(fooditems).length.greaterThanOrEqual(0);

      fooditems.forEach((fooditem) => {
        expect(fooditem.name).to.be.an("string");
        expect(fooditem.description).to.be.an("string");
        expect(fooditem.image).to.be.an("string");
        expect(fooditem.categoryId).to.be.an("string");
        expect(fooditem.cuisineId).to.be.an("string");
        expect(fooditem.isVeg).to.be.an("boolean");
        expect(fooditem.isActive).to.be.an("boolean");
      });
      
    });
  });
  
});
