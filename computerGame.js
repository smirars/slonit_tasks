function guessingGame() {

    const target = Math.floor(Math.random() * 100) + 1
    console.log(`Компьютер 1 загадал число: ${target}.`)
  
    let low = 1
    let high = 100 
    let guess
  
    while (true) {
      
      guess = Math.floor((low + high) / 2)
  
      console.log(`Компьютер 2: Пробую число ${guess}.`)
  
      if (guess < target) {
        console.log("Компьютер 1: Больше.")
        low = guess + 1 // Изменение нижней границы диапазона
      } else if (guess > target) {
        console.log("Компьютер 1: Меньше.")
        high = guess - 1 // Изменение верхней границы диапазона
      } else {
        console.log("Компьютер 1: Угадал!")
        break
      }
    }
  }
  
  guessingGame()
  