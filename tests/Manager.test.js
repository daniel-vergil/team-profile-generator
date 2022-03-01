const manager = require("../lib/Manager");

const phoneNumber = "555-555-5555";
const role = "Manager";

test("Verify the ability to set an office number for Manager", () => {
  const newManager = new manager("David", 1, "test@test.com", phoneNumber);
  expect(newManager.officeNumber).toBe(phoneNumber);
});

test("Verify if getRole function is working as expected", () => {
  const newManager = new manager("Daniel", 1, "test@test.com", phoneNumber);
  expect(newManager.getRole()).toBe(role);
});

test("Verify if getOfficeNumber function is working as expected", () => {
  const newManager = new manager("Freddy", 1, "test@test.com", phoneNumber);
  expect(newManager.getOfficeNumber()).toBe(phoneNumber);
});
