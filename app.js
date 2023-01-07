
const buttons = document.querySelectorAll('.btn');
const equal = document.querySelector('#equal');
const clear = document.querySelector('.clear');
const operations = document.querySelectorAll('[data-operation]');
let previousOperandTextElement = document.querySelector('.previous-operand');
let currentOperandTextElement = document.querySelector('.current-operand');


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        displayNumberInOutput(btn.textContent);
    })
})









