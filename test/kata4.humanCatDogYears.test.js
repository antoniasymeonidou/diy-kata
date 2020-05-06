const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    const humanYears = 10;
    
    test("returns an array of three numbers when humanCatDogYears is passed a number.", () => {
      expect(humanCatDogYears(humanYears)).toEqual([humanYears, 56, 68]);
    });
  });
