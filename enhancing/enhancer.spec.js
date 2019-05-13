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
  describe("succeed", () => {});

  describe("fail", () => {});

  describe("repair", () => {
    it("should repair the item", () => {
      expect(enhancer.repair(brokenItem)).toStrictEqual(repairedItem);
      expect(enhancer.repair(reallyBrokenItem)).toStrictEqual(repairedItem);
    });
  });

  describe("get", () => {});
});

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
