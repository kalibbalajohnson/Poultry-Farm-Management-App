const multiply = require("../multiply");

describe("Multiply Function Tests", () => {
  test("should return 1 when multiplying 1 and 1", () => {
    expect(multiply(1, 1)).toBe(1);  
  });

  test("should return 1 when multiplying 1 and 1", () => {
    expect(multiply(1, 1)).toBe(1);  
  });

  test("should return 9 when multiplying 3 and 3", () => {
    expect(multiply(3, 3)).toBe(9); 
  });

  test("should return 16 when multiplying 4 and 4", () => {
    expect(multiply(4, 4)).toBe(16);  
  });

  test("should return 1035 when multiplying 23 and 45", () => {
    expect(multiply(23, 45)).toBe(1035);  
  });

  test("should return -20 when multiplying -4 and 5(negative number)", () => {
    expect(multiply(-4, 5)).toBe(-20);  
  });
});
