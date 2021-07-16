const numbers = document.querySelectorAll(".number");
const screen = document.querySelector('.screen')
const operators = document.querySelectorAll('.operator')
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const history = document.querySelector('.history')


const tampilkanHistory = () =>{
    history.value = `${currentNumber} ${calculationOperator} ${prevNumber} = `
}


decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})


clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})


equalSign.addEventListener('click', () => {
    calculate()
    tampilkanHistory()
    updateScreen(currentNumber)
})


operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        inputOperator(e.target.value)
    })
})


numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

const updateScreen = (number) => {
    screen.value = number
}

let historyList = ''
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}


const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    } else{
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    
    calculationOperator = operator
    currentNumber = ''
}

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            return;

    }
    currentNumber = result
    calculationOperator = ''
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}