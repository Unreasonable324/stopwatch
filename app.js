const time = document.querySelector('#time')
const start = document.querySelector('#start')

let timezero

start.addEventListener('click', (event) =>{
    setInterval(decreaseTime, 1000)
    setTime(timezero)
}) 