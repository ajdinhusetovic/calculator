const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('.inpt');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        input.value = btn.textContent;
    })
})

