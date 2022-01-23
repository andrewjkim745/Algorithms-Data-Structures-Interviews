// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function longestCommonPrefix(strs) {


    return strs.reduce((a,b)=> {
        let i = 0
        while (a[i] && b[i] && a[i] === b[i]) 
            i++
            return a.slice(0, i)
        
    })
}


console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // should return 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // should return ''
console.log(longestCommonPrefix(['harry', 'hagrid', 'hermione'])) // should return 'h'
console.log(longestCommonPrefix(['porch', 'porsche', 'portland'])) // should return 'por'