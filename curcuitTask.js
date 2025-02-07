const CreateLogger = () => {
    let arr = []
    const methods = {
        log: function(message) {
            arr.push(message)
        },
        getLogs: function() {
            arr.forEach((log) => console.log(log))
        }
    }
    return methods
}

const logger = CreateLogger()
logger.log("First message")
logger.log("Second message")
logger.getLogs()


const createRandomGenerator = (min, max) => {
    return function () {
        return Math.floor(Math.random() * (max - min) + min)
    }
} 

const randomGen = createRandomGenerator(10, 50)
console.log(randomGen())
console.log(randomGen())