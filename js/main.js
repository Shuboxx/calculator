let display = document.querySelector('#display')
let numberBtns = document.querySelectorAll('[data-number]')
let operandBtns = document.querySelectorAll('[data-operand]')
let clearBtn = document.querySelector('#clear')
let equalsBtn = document.querySelector('#equals')
let currentVal
let previousVal
let operandVal
numberBtns.forEach((x) => {
    x.addEventListener('click', function(e) {
        display.innerText += e.target.innerText
    })
})

operandBtns.forEach((x) => {
    x.addEventListener('click', function(e) {
        previousVal = display.innerText
        operandVal = e.target.innerText
        display.innerText = ''

    })
})

clearBtn.addEventListener('click', function() {
    display.innerText = ''
})

equalsBtn.addEventListener('click', operation)

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operation(a, operand, b) {
    currentVal = display.innerText
    a = Number(previousVal)
    operand = operandVal
    b = Number(currentVal)
    switch(operand) {
        case '+':
            display.innerText = add(a,b)
            break
        case '-':
            display.innerText = subtract(a,b)
            break
        case 'X':
            display.innerText = multiply(a,b)
            break
        case '/':
            display.innerText = divide(a,b)
            break
    }
}