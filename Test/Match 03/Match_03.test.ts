describe("Match 03 testcases", () => {
  const solution = require("../../Match 03/submissions/anurag.lingam.min.js");
  test("test case 1", async () => {
    const a = "asd";
    const b = "hhjp";
    expect(solution(a, b)).toBeFalsy();
  });
  test("test case 2", async () => {
    const a = "Accd";
    const b = "cdac";
    expect(solution(a, b)).toBeFalsy();
  });
  test("test case 3", async () => {
    const a = "Accd";
    const b = "cdAc";
    expect(solution(a, b)).toBeTruthy();
  });
  test("test case 4", async () => {
    const a = "Accd1";
    const b = "cd1Ac";
    expect(solution(a, b)).toBeFalsy();
  });
  test("test case 5", async () => {
    const a = "";
    const b = "";
    expect(solution(a, b)).toBeTruthy();
  });
  test("test case 6", async () => {
    const a = "Accdw";
    const b = "cdAc";
    expect(solution(a, b)).toBeFalsy();
  });
});
