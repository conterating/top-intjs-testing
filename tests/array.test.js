import analyzeArray from "../src/array.js";

test("returns array summary for multi length array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("returns array summary for a one number array", () => {
  expect(analyzeArray([3])).toEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });
});
