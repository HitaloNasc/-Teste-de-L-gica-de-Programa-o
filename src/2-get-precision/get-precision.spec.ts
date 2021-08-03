import { getPrecision } from "./get-precision";

describe("getPrecision()", () => {
  it("Returns the decimal precision up to 5", async () => {
    const tests: Array<{ n: number; expected: number }> = [
      { n: 1.2, expected: 1 },
      { n: 1.25, expected: 2 },
      { n: 1.0, expected: 0 },
      { n: 1.12345, expected: 5 },
      { n: 1.10101, expected: 5 },
      { n: -1.2, expected: 1 },
      { n: -1.25, expected: 2 },
      { n: -1.0, expected: 0 },
      { n: -1.12345, expected: 5 },
      { n: -1.10101, expected: 5 },
    ];

    for (const { n, expected } of tests) {
      expect(getPrecision(n)).toBe(expected);
    }
  });

  it("Returns the decimal precision up to 10", async () => {
    const tests: Array<{ n: number; expected: number }> = [
      { n: 1.123456789, expected: 9 },
      { n: 1.1234567891, expected: 10 },
      { n: 1.123456, expected: 6 },
      { n: -1.123456789, expected: 9 },
      { n: -1.1234567891, expected: 10 },
      { n: -1.123456, expected: 6 },
    ];

    for (const { n, expected } of tests) {
      expect(getPrecision(n)).toBe(expected);
    }
  });

  it("Returns the decimal precision up to 20", async () => {
    const tests: Array<{ n: number; expected: number }> = [
      { n: 1e-18, expected: 18 },
      { n: 1e-20, expected: 20 },
      { n: -1e-18, expected: 18 },
      { n: -1e-20, expected: 20 },
    ];

    for (const { n, expected } of tests) {
      expect(getPrecision(n)).toBe(expected);
    }
  });
});
