const { userLogin, userRegister } = require("./usersControllers");

const mocktoken = "123";
const mockNewUser = {
  _id: 3,
  name: "Pepita",
  password: "password",
};

jest.mock("jsonwebtoken", () => ({
  sign: () => mocktoken,
}));
jest.mock("../../../db/models/User", () => ({
  findOne: jest.fn().mockResolvedValueOnce(true).mockResolvedValueOnce(false),
  create: jest.fn(() => mockNewUser),
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
          name: "Pepita",
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

describe("Given a userRegister function", () => {
  describe("When it is called", () => {
    test("Then it should call the response method with status 201 and the returned value should be the token", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const req = {
        body: {
          name: "Pepita",
          password: "password",
        },
      };
      const expectedStatus = 201;

      await userRegister(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({
        id: 3,
        name: "Pepita",
      });
    });
  });
});
