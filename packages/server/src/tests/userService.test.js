import { describe, jest } from '@jest/globals';

// Mocking the User model
jest.unstable_mockModule("../models/User.js", () => ({
  User: {
    findOne: jest.fn(),
    create : jest.fn()
  }
}));

const { User } = await import("../models/User.js");
const { authService } = await import("../services/authService.js");

describe('User Service Testing', () => {
  describe('Function loginUser', () => {

    it('should throw an error if Neither username or password are not passed.', async () => {
      const invalidData = {};
      await expect(authService.loginUser(invalidData)).rejects.toThrow("Either the password or the username is incorrect.");
    });

    it('should throw an error if User does not exist in DB', async () => {
      // Setting the user Object to be Passed in the function.
      const invalidData = {
        username: 'testUser',
        password: 'Password123'
      };

      User.findOne.mockResolvedValue(null); // Simulating user not found --> DB returns null

      await expect(authService.loginUser(invalidData)).rejects.toThrow("Either the password or the username is incorrect.");
      expect(User.findOne).toHaveBeenCalledWith({ username: "testUser" });
    });

    it('should throw an error if password is incorrect', async () => {
      // Setting the user Object to be Passed in the function.
      const invalidData = {
        username: 'existinguser',
        password: 'wrongpassword'
      };

      // Simulating user found in DB with a different password
      User.findOne.mockResolvedValue({
        username: "existinguser",
        password: "correctpassword",
        _id: { toString: () => "123" }
      });

      await expect(authService.loginUser(invalidData)).rejects.toThrow("Either the password or the username is incorrect.");
      expect(User.findOne).toHaveBeenCalledWith({ username: "existinguser" });
    });

    it('should return user ID if login is successful', async () => {
      // Setting the user Object to be Passed in the function.
      const validData = {
        username: 'validuser',
        password: 'validpassword'
      };
      // Simulating user found in DB with matching password
      User.findOne.mockResolvedValue({
        username: "validuser",
        password: "validpassword",
        _id: { toString: () => "456" }
      });
      const userId = await authService.loginUser(validData);
      expect(userId).toBe("456");
      expect(User.findOne).toHaveBeenCalledWith({ username: "validuser" });
    });
  });


  describe('Function register', () => {

    it("should throw an error if a user already exists", async () => {
      const invalidData = {
        username: "testUser",
        name: "Test user",
        password: "password@123"
      }

      User.findOne.mockResolvedValue({
        username: "testUser",
        name: "Test user",
        password: "password@123",
        _id: "1"
      });

      await expect(authService.registerUser(invalidData)).rejects.toThrow("Username already exist");
      expect(User.findOne).toHaveBeenCalledWith({ username: "testUser" });

    });

    it("should throw an error if password or name or username is missing", async () => {
      const invalidData = {};
      await expect(authService.registerUser(invalidData)).rejects.toThrow("Either the password , name or username is missing");
    });

    it("should create a new user if data is valid", async () => {
      const validData = {
        username: "newuser",
        name: "new user",
        password: "pass@1234"
      };

      User.findOne.mockResolvedValue(null);

      User.create.mockResolvedValue({
        username: "newuser",
        name: "new user",
        password: "pass@1234",
        _id: { toString: () => "789" }
      });

      const userId = await authService.registerUser(validData);
      expect(userId).toBe('789');
      expect(User.findOne).toHaveBeenCalledWith({ username: "newuser" });
      expect(User.create).toHaveBeenCalledWith(validData);
    });
  });
});
