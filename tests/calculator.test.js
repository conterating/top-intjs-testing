import Calculator from "../src/calculator.js";

test("adds two positive numbers", () => {
  expect(new Calculator(3, 5).add()).toBe(8);
});

test("adds two negative numbers", () => {
  expect(new Calculator(-4, -3).add()).toBe(-7);
});

test("subtracts two pos numbers", () => {
  expect(new Calculator(1, 3).subtract()).toBe(-2);
});

test("subtracts two negative numbers", () => {
  expect(new Calculator(-8, -3).subtract()).toBe(-5);
});

test("multiplies two pos numbers", () => {
  expect(new Calculator(5, 7).multiply()).toBe(35);
});

test("multiplies two neg numbers", () => {
  expect(new Calculator(-3, -99).multiply()).toBe(297);
});

test("divides two nums", () => {
  expect(new Calculator(10, 2).divide()).toBe(5);
});
