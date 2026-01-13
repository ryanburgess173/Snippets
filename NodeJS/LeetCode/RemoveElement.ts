function removeElement(nums: number[], val: number): number {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      if (i === nums.length - 1) {
        nums.pop();
      } else {
        nums.splice(i, 1);
        i--;
        continue;
      }
    }
  }
  console.log(nums);
  return nums.length;
}

let nums: number[] = [3, 2, 2, 3]; // Input array
let val = 3; // Value to remove

let k: number = removeElement(nums, val); // Calls your implementation

console.log(k);

nums = [2, 1, 2, 2, 3, 0, 4, 2];
val = 2;

k = removeElement(nums, val);

console.log(k);

export {};
