const { userLogin } = require("./usersControllers");

const mocktoken = "123";

jest.mock("jsonwebtoken", () => ({
  sign: () => mocktoken,
}));

jest.mock("../../../db/models/User", () => ({
  findOne: jest.fn().mockResolvedValue(true),
}));

describe("Given a userLogin function", () => {
  describe("When it is called", () => {
    test("Then it should call the response method with status 200 and the returned value should be the token", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const req = {
        body: {
          _id: 3,
          username: "Pepita",
          password: "password",
        },
      };
      const expectedStatus = 200;

      await userLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ token: mocktoken });
    });
  });
});
