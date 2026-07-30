import cipher from "../src/caesar.js";

test("shifts 3 to the right", () => {
  expect(cipher("xyz", 3)).toBe("ABC");
});

test("shifts 1 to the right", () => {
  expect(cipher("abracadabra", 1)).toBe("BCSBDBEBCSB");
});
