import capitalize from "../src/capitalize.js";

test("capitalizes the first letter", () => {
  expect(capitalize("dog")).toBe("Dog");
});

test("other letters besides first are not capitalized", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});

test("capitalizes only the first char in a multi-word input", () => {
  expect(capitalize("the best city in the world is new york")).toBe(
    "The best city in the world is new york",
  );
});
