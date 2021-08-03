import { roundWithPrecision } from "./round-with-precision";

describe("roundWithPrecision()", () => {
  it("Returns the rounded number", async () => {
    const tests: Array<{
      number: number;
      precision: number;
      expected: number;
    }> = [
      { number: 33.333333333333, precision: 2, expected: 33.33 },
      { number: 33.333333333333, precision: 0, expected: 33 },
      { number: 33.333333333333, precision: 5, expected: 33.33333 },
      { number: 33.333339, precision: 5, expected: 33.33334 },
    ];

    for (const { number, precision, expected } of tests) {
      expect(roundWithPrecision(number, precision)).toBe(expected);
    }

    expect(roundWithPrecision(33.333333333333, 2)).toEqual(33.33);
  });
});
