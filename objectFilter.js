function getSumOfNumberValues(obj) {
    let sum = 0;
    for (key in obj) {
        if (+obj[key]) {
            sum += obj[key]
        }
    }

    return sum
}

console.log(getSumOfNumberValues({name: 'Vasya', friends: 5, likes: 10, projects: 5}))