const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("When booleanToWord is passed true, it should return 'Yes'. When it is passed false, it should return 'No'", () => {
    expect(booleanToWord(true)).toBe('Yes')
    expect(booleanToWord(false)).toBe('No')
 });
});