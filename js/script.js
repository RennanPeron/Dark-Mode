const button = document.getElementById('selector-button')
const body = document.querySelector('body')
const h1 = document.querySelector('#title')
let darkMode = false

button.addEventListener('click', () => {
    button.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')

    darkMode = !darkMode
    if(darkMode){
        button.innerHTML = 'Light Mode'
        h1.innerHTML = `Dark Mode
        <span class="material-icons">
            dark_mode
        </span>`
    } else
    {
        button.innerHTML = 'Dark Mode'
        h1.innerHTML = `Light Mode
        <span class="material-icons">
            light_mode
        </span>
        `
    }
})