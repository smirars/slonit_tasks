function changeFirstLetterToUpperCase(str) {
    let firstLetter = str.slice(0, 1)
    let newFirstLetter = firstLetter.toUpperCase()
    return `${newFirstLetter}` + `${str.slice(1)}`
}

console.log(changeFirstLetterToUpperCase('hello'))

function getShorterString(str, newLength) {
    if (str.length <= newLength) {
        return str
    } else {
        let firstShortyString = str.slice(0, newLength)
        // Найдем индекс последнего вхождения нужного нам символа из набора
        const symbols = [",", ".", "!", "?", ":", ";", " "]
        let actLastIndex = -1
        for (let i = 0; i < symbols.length; i++) {
            if (firstShortyString.lastIndexOf(symbols[i]) > actLastIndex) {
                actLastIndex = firstShortyString.lastIndexOf(symbols[i])
            }
        }
        // Добавляем к actLastIndex единицу, если хотим сохранить знак препинания в итоговой строке
        return firstShortyString.slice(0, actLastIndex + 1)
    }
    
}

console.log(getShorterString('hello;h ellohellohellohellohellohellohellohellohellohellohello', 8))

function isStingIncludes(firstStr, secondStr) {
    // Если нам важен регистр, то к нижнему регистру можно не приводить
    const cleanFirstStr = firstStr.toLowerCase()
    const cleanSecondStr = secondStr.toLowerCase()

    return (cleanFirstStr.includes(cleanSecondStr) || cleanSecondStr.includes(cleanFirstStr))
}

console.log(isStingIncludes("Hello, world!", "hllo"))