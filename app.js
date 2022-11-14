const time = document.querySelector('#time')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')

let mlsec = 0
let sec = 0
let min = 0
let hrs = 0
let day = 0
let year = 0

start.addEventListener('click', function increaseTime() {
    let current = ++mlsec 
    if (mlsec >= 100) {
        mlsec= 0;
        ++sec
    } if (sec >= 60) {
        sec= 0;
        ++min
    }if (min >= 60){
        min = 0;
        ++hrs
    } if (hrs >= 24){
        hrs = 0;
        ++day
    } if (day >= 365){
        day = 0;
        ++year
    }
    setTimeout(increaseTime, 10)
    setTime(current)
    })

    pause.addEventListener('click', function(){clearTimeout(mlsec)} )
    stop.addEventListener('click', function(){ time.innerHTML = (`0000000000`)} )

function setTime(value){
    time.innerHTML = (year > 9 ? year: '0' + year)
                     + ':' + 
                     (day > 9 ? day: '0' + day)
                     + ':' + 
                     (hrs > 9 ? hrs: '0' + hrs)
                     + ':' + 
                     (min > 9 ? min: '0' + min)
                     + ':' + 
                     (sec> 9 ? sec: '0' + sec)
                     + ':' + 
                     (mlsec> 9 ? mlsec: '0' + mlsec)
                    
}