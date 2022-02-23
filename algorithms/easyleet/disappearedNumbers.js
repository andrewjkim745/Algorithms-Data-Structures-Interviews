// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


const findDisappearedNumbers = (nums) => {

    let array = []
    for (let i = 0; i < nums.length; i ++) {
        let num = Math.abs(nums[i])
        let idx = num - 1

        nums[idx] = Math.abs(nums[idx]) * -1
    }


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) array.push(i+1);
    }


    return array
}



console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // should output [5,6]
console.log(findDisappearedNumbers([1,1])) // should output [2]
console.log(findDisappearedNumbers([2,2])) // should output [1]