const time = document.querySelector('#time')
const start = document.querySelector('#start')

let timezero = 95

// function startgame(){
//     setInterval(increaseTime, 1000)
//     setTime(timezero)}
    

start.addEventListener('click', function increaseTime() {
    let current = ++timezero 
        if (current < 10) {
            current = `0${current}`
        }else if (current > 100) {
            current = `0${current}`
        }
        setTimeout(increaseTime, 1000)
    
        setTime(current)
    })
    

function setTime(value){
    time.innerHTML = `00:${value}`
}