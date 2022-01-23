// What is the difference between const, let and var? 


// var is globally scoped when declared outside a function 

var greet = 'how are you'

//when declared in a function can only be accessed in that function
function greetSomeone() {
    var hello = 'hello' // will output an error because if console.log() outside of greetSomeone()
}

console.log(greet) // outputs 'how are you'
// console.log(hello) // outputs error

//Weakness is that if var is declared before and you define it again within a block function it will change the value of var and create bugs


//let is block scoped {}

let greeting = 'hey'
greeting = 'hey whats up' // updated greeting
if (greeting === 'hey' || 'hey whats up') {
    let hello = 'hello'
    console.log(hello)
    let greeting = 'hey in block' //treated as different instance because defined within block
    console.log(greeting)
}
console.log(greeting)
// console.log(hello) // returns not defined because hello is declared only in block

//let can be updated but not redeclared



//const is block scoped but cannot be updated OR re-declared
// behavior is different when const is declared as an object 

const meet = {
    message: 'hi',
    times: '4'
}

meet.message='hey hey'

console.log(meet)


// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; 
// const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, 
// let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.