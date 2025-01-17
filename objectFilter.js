function getSumOfNumberValues(obj) {
    let sum = 0;
    for (key in obj) {
        // используем унарный оператор чтобы не числовые значения стали NaN(false)
        if (+obj[key]) {
            sum += obj[key]
        }
    }

    return sum
}

console.log(getSumOfNumberValues({name: 'Vasya', friends: 5, likes: 10, projects: 7}))

function getArrayOfFilteredKeys(obj) {
    let result = []
    let filteredObj = {}
    for (key in obj) {
        if (+obj[key]) {
            filteredObj[key] = obj[key]
        }
    }
    // сортируем массив ключей по значениям
    let sortedEntries = Object.entries(filteredObj).sort((a, b) => b[1] - a[1])
    for (let i = 0; i < sortedEntries.length; i++) {
        result.push(sortedEntries[i][0])
    }
    return result
}

console.log(getArrayOfFilteredKeys({name: 'Vasya', friends: 5, likes: 10, projects: 7}))