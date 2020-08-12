// https://leetcode.com/problems/two-sum/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  // brute force (my solution)
// const twoSum = (nums, target) => {
//   for (i = 0; i < nums.length; i++) {
//     for (j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         if (target - nums[i] === nums[j]) {
//           return [i, j];
//         }
//       }
//     }
//   };
// };

// // two-pass hash table
// const twoSum = (nums, target) => {
//   let hashTable = new Map();

//   nums.forEach((num, index) => {
//     hashTable.set(num, index);
//   });

//   for (i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     let hasKey = hashTable.has(complement);
//     let value = hashTable.get(complement);
//     if (hasKey && i !== value) {
//       return [i, value];
//     }
//   }
// };

// one-pass hash table
const twoSum = (nums, target) => {
  let hashTable = new Map();
  for (i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    let hashedIndex = hashTable.get(complement);
    let check = hashTable.has(complement) && hashedIndex !== i;
    if (check) {
      return [hashedIndex, i];
    }
    hashTable.set(num, i);
  }
};

console.log(twoSum([3, 2, 3], 6));