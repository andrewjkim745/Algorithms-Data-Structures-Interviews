// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function validParentheses(s) {

    let compliment = []

    for (let i = 0; i < s.length ; i++) {
        switch(s[i]) {
            case '(': compliment.push(')')
            break;
            case '[': compliment.push(']')
            break;
            case '{': compliment.push('}')
            break;
            default: if (s[i] != compliment.pop()) {
                return false
            }
        }
       
    }
    return compliment.length === 0
}



console.log(validParentheses('{}{}[]()')) // should return true
console.log(validParentheses('()')) //should return true
console.log(validParentheses('[)')) //should return false
console.log(validParentheses('()[]{}')) // should return true
console.log(validParentheses('[')) // should return false