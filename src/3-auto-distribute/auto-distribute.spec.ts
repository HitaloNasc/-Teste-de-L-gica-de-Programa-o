import { autoDistribute } from "./auto-distribute";

describe("autoDistributePercentage()", () => {
  it("100 by 3 with 5 precision points", async () => {
    expect(autoDistribute(100, 3, 5)).toEqual([33.33334, 33.33333, 33.33333]);
  });

  it("100 by 4 with 2 precision points", async () => {
    expect(autoDistribute(100, 4, 2)).toEqual([25, 25, 25, 25]);
  });

  it("100 by 5 with 0 precision points", async () => {
    expect(autoDistribute(100, 5, 0)).toEqual([20, 20, 20, 20, 20]);
  });

  it("100 by 6 with 2 precision points", async () => {
    expect(autoDistribute(100, 6, 2)).toEqual([
      16.67, 16.67, 16.67, 16.67, 16.66, 16.66,
    ]);
  });

  it("100 by 7 with 5 precision points", async () => {
    expect(autoDistribute(100, 7, 5)).toEqual([
      14.28572, 14.28572, 14.28572, 14.28571, 14.28571, 14.28571, 14.28571,
    ]);
  });

  it("100 by 11 with 5 precision points", async () => {
    expect(autoDistribute(100, 11, 5)).toEqual([
      9.09091, 9.09091, 9.09091, 9.09091, 9.09091, 9.09091, 9.09091, 9.09091,
      9.09091, 9.09091, 9.0909,
    ]);
  });
});
