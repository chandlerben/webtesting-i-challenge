module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const enhancedItem = item.enhancement + 1;
  if (item.enhancement < 20) {
    console.log(enhancedItem);
    return { ...item, enhancement: enhancedItem };
  } else {
    return { ...item };
  }
}

function fail(item) {
  const failedBelow15 = item.durability - 5;
  const failedAt15OrAboveDurability = item.durability - 10;
  const failedAt17OrAboveEnhancement = item.enhancement - 1;
  if (item.enhancement < 15) {
    if (item.durability <= 5) {
      return { ...item, durability: 0 };
    } else {
      return { ...item, durability: failedBelow15 };
    }
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    if (item.durability <= 10) {
      return { ...item, durability: 0 };
    } else {
      return { ...item, durability: failedAt15OrAboveDurability };
    }
  } else {
    if (item.durability <= 10) {
      return {
        ...item,
        enhancement: failedAt17OrAboveEnhancement,
        durability: 0
      };
    } else {
      return {
        ...item,
        enhancement: failedAt17OrAboveEnhancement,
        durability: failedAt15OrAboveDurability
      };
    }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const enhancementNumber = item.enhancement;
  const itemOldName = item.name;

  if (!itemOldName) {
    return { ...item, name: `[+${enhancementNumber}]` };
  } else {
    if (item.enhancement === 0) {
      return { ...item };
    } else {
      return { ...item, name: `[+${enhancementNumber}] ${itemOldName}` };
    }
  }
}
