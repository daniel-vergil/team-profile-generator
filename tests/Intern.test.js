const intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Oxford";
  const exp = new intern("Danny", 1, "test@test.com", testValue);
  expect(exp.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const exp = new intern("Dan", 1, "test@test.com", "Cambridge");
  expect(exp.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Harvard";
  const exp = new intern("Daniel", 1, "test@test.com", testValue);
  expect(exp.getSchool()).toBe(testValue);
});