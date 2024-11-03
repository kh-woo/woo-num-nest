const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(5) should return true", () => {
    expect(lib.prime(5)).toBe(true);
});

test("prime(4) should return false", () => {
    expect(lib.prime(4)).toBe(false);
});

test("factorial(3) should return 6", () => {
    expect(lib.factorial(3)).toBe(6);
});

test("factorial(5) should return 120", () => {
    expect(lib.factorial(5)).toBe(120);
});
