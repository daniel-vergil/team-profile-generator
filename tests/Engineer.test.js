const engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "daniel-vergil";
  const exp = new engineer("Dan", 1, "test@test.com", testValue);
  expect(exp.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const exp = new engineer("Daniel", 1, "test@test.com", "daniel-vergil");
  expect(exp.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "daniel-vergil";
  const exp = new engineer("Daniel", 1, "test@test.com", testValue);
  expect(exp.getGithub()).toBe(testValue);
});
