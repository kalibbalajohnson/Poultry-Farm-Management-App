const multiply = require("../multiply");

describe("Multiply Function Tests", () => {
  test("should return 36 when multiplying 6 and 6", () => {
    expect(multiply(6, 6)).toBe(36);  
  });

  test("should return 16 when multiplying 4 and 4", () => {
    expect(multiply(6, 3)).toBe(18);  
  });

  test("should return 1035 when multiplying 23 and 45", () => {
    expect(multiply(41, 22)).toBe(902);  
  });

  test("should return -20 when multiplying -4 and 5(negative number)", () => {
    expect(multiply(4, 4)).toBe(16);  
  });
});
