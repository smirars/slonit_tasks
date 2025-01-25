
function calculate(firstNum, secondNum, operation) {
    return operation(firstNum, secondNum)
}

const returnSum = (a, b) => a + b
const returnDiff = (a, b) => a - b
const returnMultiply = (a, b) => a * b
const returnDivision = (a, b) => a / b

const operations = {
    sum: returnSum,
    diff: returnDiff,
    multiply: returnMultiply,
    division: returnDivision
}

const testSum = "sum"
const testDiff = "diff"
const testMult = "multiply"
const testDiv = "division"

console.log(calculate(10, 5, operations[testSum]))
console.log(calculate(10, 5, operations[testDiff]))
console.log(calculate(10, 5, operations[testMult]))
console.log(calculate(10, 5, operations[testDiv]))
