function twoSum(nums, target) {
    const numsObjs = {}; // create nums obj with value as key and index as value eg: [2,7,11,15] => {2: 0, 7: 1, 11: 2, 15: 3}
  
    for (let i = 0; i < nums.length; i++) {
      const currentValue = nums[i];
  
      if (target - currentValue in numsObjs) {
        return [i, numsObjs[target - currentValue]];
      }
      numsObjs[nums[i]] = i;
    }
  
    return [-1, -1];
  }
  
  res = twoSum([3,7,4], 6);
  console.log(res);

document.getElementById('g').innerHTML = res;