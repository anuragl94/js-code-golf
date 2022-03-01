describe("Match 01 testcases", () => {
  const solution = require("../../Match 01/submissions/anurag.lingam");
  test("test case 1", async () => {
    const num = 2;
    const ans = "1\n2";
    expect(solution(num)).toMatch(ans);
  });
  test("test case 2", async () => {
    const num = 3;
    const ans = "1\n2\nFizz";
    expect(solution(num)).toMatch(ans);
  });
  test("test case 3", async () => {
    const num = 4;
    const ans = "1\n2\nFizz\n4";
    expect(solution(num)).toMatch(ans);
  });
  test("test case 4", async () => {
    const num = 5;
    const ans = "1\n2\nFizz\n4\nBuzz";
    expect(solution(num)).toMatch(ans);
  });
  test("test case 5", async () => {
    const num = 16;
    const ans =
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16";
    expect(solution(num)).toMatch(ans);
  });
});
