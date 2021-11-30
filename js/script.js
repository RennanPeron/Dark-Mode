const button = document.getElementById('selector-button')
const body = document.querySelector('body')

button.addEventListener('click', () => {
    button.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
})
