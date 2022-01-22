// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Difficulty: Easy


// for loop method
// function TwoSum (nums, target) {
//     for (let i = 0 ; i < nums.length; i ++) {
//         for (let j = i+1; j < nums.length; j++ ) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }

//object method 

function TwoSum (nums, target) {
    let object = {}

    for (let i = 0; i < nums.length; i++) {
        let compliment = target-nums[i]
        if (compliment in object) {
            return [object[compliment], i]
        } else {
            object[nums[i]] = i
        }
    }
}


console.log(TwoSum([2,7,11,15], 9)) // should give us [0,1]
console.log(TwoSum([1,4,7,1,2], 2)) // should give us [0,3]
console.log(TwoSum([4,2,1,6,7,8], 13)) // should give us [3,4]