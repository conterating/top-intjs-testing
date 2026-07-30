import reverse from "../src/reverse.js";

test("reverses a one-word string", () => {
  expect(reverse("ballboy")).toBe("yobllab");
});

test("reverses a palindrome", () => {
  expect(reverse("racecar")).toBe("racecar");
});

test("reverses multiple words", () => {
  expect(reverse("a very long sentence")).toBe("ecnetnes gnol yrev a");
});
