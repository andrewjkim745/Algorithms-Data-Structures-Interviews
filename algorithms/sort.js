
//sort data alphabetically


const data = ['Mary', 'Esther', 'Andrew', 'Tommy', 'Ryan', 'Paul', 'Bart']


function sortData() {
    data.sort((a,b) => {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    })

    console.log(data)
}
// sort data alphabetically reverse 
function sortDataReverse() {
    data.sort((a,b) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })

    console.log(data)
}
// console.log(sortData())
sortData()
sortDataReverse()