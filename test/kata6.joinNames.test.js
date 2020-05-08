const { joinNames } = require("../src");

describe("joinNames", () => {
    test("returns string of names, seperated by commas and an ampersand", () => {
    
    expect(joinNames(["Bart", "Lisa", "Maggie"])).toBe('Bart, Lisa & Maggie')
    expect(joinNames(["Bart", "Lisa", "Maggie", "Lisa"])).toBe('Bart, Lisa, Maggie & Lisa')
  });
});
