'use strict'
const firstNumber = prompt('Your first number')
const secondNumber = prompt('Your second number')

function sum(a,b) {
  return Number(a) + Number(b)
}

console.log('Результат: ' + sum(firstNumber , secondNumber));

function mult(a,b) {
    return a * b
}

console.log('Результат: ' + mult(firstNumber, secondNumber));

function sub(a,b) {
    return a - b
}

console.log('Результат: ' + sub(firstNumber, secondNumber));

function div(a,b) {
    return a / b
}

console.log('Результат: ' + div(firstNumber, secondNumber));

