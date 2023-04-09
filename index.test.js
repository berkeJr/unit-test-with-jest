const { sum } = require("./index.js");

it("should return sum of two numbers", () => {
  // arrange
  const num1 = 4;
  const num2 = 5;

  // act
  const result = sum(num1, num2);

  // assertion
  expect(result).toBe(9);
});
