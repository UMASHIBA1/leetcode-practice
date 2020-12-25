var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var k = 0; k < nums.length; k++) {
            if (i !== k && nums[i] + nums[k]) {
                return [i, k];
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
