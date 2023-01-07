const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('.inpt');
const equal = document.querySelector('#equal');
const clear = document.querySelector('.clr');

const clearInputField = () => {
    input.value = " ";
    console.log(input.value)
}

const timesTwo = (number) => {
    input.value = number*2;
    console.log(input.value)
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        input.value = btn.dataset.num
      
    })
})


equal.addEventListener('click', (e)=>{
    e.preventDefault();
    timesTwo(input.value)
})

clear.addEventListener('click', (e) => {
    e.preventDefault();
    clearInputField();
});





