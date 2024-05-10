var twoSum = function (nums, target) {
  let storage = [];
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
