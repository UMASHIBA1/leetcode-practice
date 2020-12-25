const twoSum = (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            if( i !== k && nums[i] + nums[k]) {
                return [i ,k];
            }
        }
    }
};
