const employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const exp = new employee();
        expect(typeof (exp)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Ryan";
        const exp = new employee(name);
        expect(exp.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 12345;
        const exp = new employee("Julie", testValue);
        expect(exp.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const exp = new employee("Tom", 1, testValue);
        expect(exp.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Alice";
            const exp = new employee(testValue);
            expect(exp.getName()).toBe(testValue);
        });
    });

    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 98765;
            const exp = new employee("Foo", testValue);
            expect(exp.getId()).toBe(testValue);
        });
    });

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const exp = new employee("Winny", 1, testValue);
            expect(exp.getEmail()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const exp = new employee("Alice", 1, "test@test.com");
            expect(exp.getRole()).toBe(testValue);
        });
    });

});