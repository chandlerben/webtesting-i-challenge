const enhancer = require("./enhancer.js");
// test away!

/*  
{
    'name': 'Sword of Truth',
    'enhancement': 17,
    'durability': 96

}

*/

describe("enhancer.js", () => {
  describe("succeed", () => {
    it("should enhance the item", () => {
      expect(enhancer.succeed(unEnhancedItem)).toStrictEqual(enhancedItem);
    });
    it("it should NOT enhance the item", () => {
      expect(enhancer.succeed(alreadyEnhancedItem)).toStrictEqual(
        alreadyEnhancedItem
      );
    });
  });

  describe("fail", () => {
    it("should decrease the item 5", () => {
      expect(enhancer.fail(lessThan15Item)).toStrictEqual(lessThan15ItemResult);
    });
    it("should decrease the item 5 to 0", () => {
      expect(enhancer.fail(lessThan15AndBrokenItem)).toStrictEqual(
        lessThan15AndBrokenItemResult
      );
    });
    it("should decrease the item 10", () => {
      expect(enhancer.fail(higherThan15Item)).toStrictEqual(
        higherThan15ItemResult
      );
    });
    it("should decrease the item 10 to 0", () => {
      expect(enhancer.fail(higherThan15AndBrokenItem)).toStrictEqual(
        higherThan15AndBrokenItemResult
      );
    });
    it("should decrease the item durability 10 and enchantment by 1", () => {
      expect(enhancer.fail(higherThan17Item)).toStrictEqual(
        higherThan17ItemResult
      );
    });
    it("should decrease the item durability 10 and enchantment by 1", () => {
      expect(enhancer.fail(higherThan17AndBrokenItem)).toStrictEqual(
        higherThan17AndBrokenItemResult
      );
    });
  });

  describe("repair", () => {
    it("should repair the item", () => {
      expect(enhancer.repair(brokenItem)).toStrictEqual(repairedItem);
      expect(enhancer.repair(reallyBrokenItem)).toStrictEqual(repairedItem);
    });
  });

  describe("get", () => {
    it('"should rename the item"', () => {
      expect(enhancer.get(regularItemChangingName)).toStrictEqual(
        regularItemChangingNameResult
      );
    });
    it('"should NOT rename the item"', () => {
      expect(enhancer.get(TERRIBLEItemChangingNames)).toStrictEqual(
        TERRIBLEItemChangingNames
      );
    });
    it('"should rename the item?"', () => {
      expect(enhancer.get(nonNamedItem)).toStrictEqual(nonNamedItemResult);
    });
  });
});

//GET NAME CHANGE
const regularItemChangingName = {
  name: "Jar of Pickles",
  enhancement: 12,
  durability: 96
};

const regularItemChangingNameResult = {
  name: "[+12] Jar of Pickles",
  enhancement: 12,
  durability: 96
};

const TERRIBLEItemChangingNames = {
  name: "Dust Bunny of Uselessness",
  enhancement: 0,
  durability: 96
};

const nonNamedItem = {
  name: "",
  enhancement: 6,
  durability: 57
};

const nonNamedItemResult = {
  name: "[+6]",
  enhancement: 6,
  durability: 57
};

//FAILED ENHANCEMENTS
const lessThan15Item = {
  name: "Dagger of Stupidity",
  enhancement: 12,
  durability: 96
};

const lessThan15ItemResult = {
  name: "Dagger of Stupidity",
  enhancement: 12,
  durability: 91
};

const lessThan15AndBrokenItem = {
  name: "Dagger of Stupidity",
  enhancement: 12,
  durability: 3
};

const lessThan15AndBrokenItemResult = {
  name: "Dagger of Stupidity",
  enhancement: 12,
  durability: 0
};

const higherThan15Item = {
  name: "Dagger of Stupidity",
  enhancement: 16,
  durability: 96
};

const higherThan15ItemResult = {
  name: "Dagger of Stupidity",
  enhancement: 16,
  durability: 86
};

const higherThan15AndBrokenItem = {
  name: "Dagger of Stupidity",
  enhancement: 16,
  durability: 3
};

const higherThan15AndBrokenItemResult = {
  name: "Dagger of Stupidity",
  enhancement: 16,
  durability: 0
};

const higherThan17Item = {
  name: "Dagger of Stupidity",
  enhancement: 18,
  durability: 96
};

const higherThan17ItemResult = {
  name: "Dagger of Stupidity",
  enhancement: 17,
  durability: 86
};

const higherThan17AndBrokenItem = {
  name: "Dagger of Stupidity",
  enhancement: 18,
  durability: 6
};

const higherThan17AndBrokenItemResult = {
  name: "Dagger of Stupidity",
  enhancement: 17,
  durability: 0
};

//SUCCESSFUL ENHANCEMENTS
const unEnhancedItem = {
  name: "Spear of Blandness",
  enhancement: 17,
  durability: 96
};

const alreadyEnhancedItem = {
  name: "Spear of Blandness",
  enhancement: 20,
  durability: 96
};

const enhancedItem = {
  name: "Spear of Blandness",
  enhancement: 18,
  durability: 96
};

//REPAIRS BEING DONE.
const brokenItem = {
  name: "Sword of Truth",
  enhancement: 17,
  durability: 96
};

const reallyBrokenItem = {
  name: "Sword of Truth",
  enhancement: 17,
  durability: 0
};

const repairedItem = {
  name: "Sword of Truth",
  enhancement: 17,
  durability: 100
};
