// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer n, the number of socks represented in ar.
// The second line contains  n space-separated integers, ar[i], the colors of the socks in the pile

// record in object method
// function sockMerchant(n, ar) {
//     let obj = {}
//     let pairs = 0
//     ar.forEach(i => {
//         if (obj[i]) {
//             pairs++
//             obj[i] = 0
//         } else {
//             obj[i] = 1
//         }
//     })
        


//     return pairs

// }


//sort method easy to understand
function sockMerchant(n, ar) {
    let count = 0
    ar.sort()
    console.log(ar)
    for (let i=0; i<n; i++) {
        if (ar[i] === ar[i+1]) {
            i++
            count++
        }
        
    }
    return count 
}



console.log(sockMerchant(7, [1,2,1,2,1,3,2])) // should return 2 

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // should return 3

console.log(sockMerchant(4, [10, 20, 20, 20])) // should return 1