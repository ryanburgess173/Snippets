function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i != j) {
        if (j === nums.length - 1) {
          nums.pop();
        } else {
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

let nums: number[] = [1, 1, 2];

console.log(removeDuplicates(nums));

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));

export {};
