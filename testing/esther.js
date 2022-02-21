

// let x = [1,2,3,4,5,6]
// let pooop = {
//     color: 'brown',
//     consistency: 'sticky',
//     smell: 'stinky'
// }
// console.log (pooop)
// let emptyArray = []
// const newArr = x.map(number => number + 2)
// console.log(newArr)


// console.log(x)

function sortBy(a, p) {
    return a.sort((a, b) => {
        if (a[p] < b[p]) return 1
        if (a[p] < b[p]) return -1
        return 0
    })
}



console.log(sortBy())