const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { mongoose } = require("mongoose");
const app = require("../..");
const User = require("../../../db/models/User");

describe("Given a post /users/login endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 200 status code and a token", async () => {
      const mongoServer = await MongoMemoryServer.create();
      await mongoose.connect(mongoServer.getUri());
      await User.create({
        name: "Marian",
        password: "password",
      });

      const response = await request(app)
        .post("/users/login")
        .send({
          name: "Marian",
          password: "password",
        })
        .expect(200);

      expect(response.body.token).not.toBeNull();

      await mongoose.connection.close();
      await mongoServer.stop();
    });
  });
});
