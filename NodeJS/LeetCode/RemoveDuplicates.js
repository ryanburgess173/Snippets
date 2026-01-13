"use strict";
exports.__esModule = true;
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i != j) {
                if (j === nums.length - 1) {
                    nums.pop();
                }
                else {
                    nums.splice(j, 1);
                    j--;
                    continue;
                }
            }
        }
    }
    console.log(nums);
    return nums.length;
}
var nums = [1, 1, 2];
console.log(removeDuplicates(nums));
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
