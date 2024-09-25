const multiply = require("../multiply");

describe("Multiply", () => {
  test("should return 1 when multiplying 1 and 1", () => {
    expect(multiply(1, 1)).toBe(1);  // Assertion
  });

  test("should return 4 when multiplying 2 and 2", () => {
    expect(multiply(2, 2)).toBe(4);  // Assertion
  });

  test("should return 9 when multiplying 3 and 3", () => {
    expect(multiply(3, 3)).toBe(9);  // Assertion
  });

  test("should return 16 when multiplying 4 and 4", () => {
    expect(multiply(4, 4)).toBe(16);  // Assertion
  });

  test("should return 1035 when multiplying 23 and 45", () => {
    expect(multiply(23, 45)).toBe(1035);  // Assertion
  });
});
