const numbers = [1, 2, 3, 4, 5]

const myFilter = (array, callback) => {
    const resArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resArray.push(array[i])
        }
    }
    return resArray
}

const evenNumberCallback = (num) => num % 2 === 0
const greaterThanThreeCallback = (num) => num > 3

console.log(myFilter(numbers, evenNumberCallback))
console.log(myFilter(numbers, greaterThanThreeCallback))
