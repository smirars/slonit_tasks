// Аналог метода slice
function customSlice(arr, start, end) {
    const result = []
    
    // Если начальный индекс отрицательный, считаем с конца
    if (start < 0) start = arr.length + start
    if (end === undefined) end = arr.length // Если конечный индекс не передан, считаем до конца
    
    // Если конечный индекс отрицательный, считаем с конца
    if (end < 0) end = arr.length + end
  
    for (let i = start; i < end && i < arr.length; i++) {
      result.push(arr[i])
    }
    
    return result
  }


// Аналог метода map
function customMap(arr, callback) {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr))
    }
    
    return result
  }
  

// Аналог метода filter
function customFilter(arr, callback) {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i])
      }
    }
    
    return result
  }


// Аналог метода reduce
function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue
    let startIndex = initialValue === undefined ? 1 : 0
    
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr)
    }
    
    return accumulator
  }


// Аналог метода forEach
function customForEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr)
    }

  }
  

const array = [1, 2, 3, 4]

console.log(customSlice(array, 1, 4))

console.log(customMap(array, num => num * 2))

console.log(customFilter(array, num => num > 2))

console.log(customReduce(array, (acc, num) => acc + num, 0))

customForEach(array, (num, index) => {
    console.log(`Элемент ${num} на индексе ${index}`)
});
  

  