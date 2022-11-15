const time = document.querySelector('#time')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')

let mlsec = 0
let sec = 0
let min = 0
let hrs = 0
let day = 0
let year = 0
let t

function increaseTime() {
    ++mlsec 
    if (mlsec >= 100) {
        mlsec = 0
        ++sec 
        if (sec >= 60) {
            sec = 0 
            ++min
            if (min >= 60) {
                min = 0
                ++hrs
                if (hrs >= 24) {
                    hrs = 0
                    ++day
                    if (day >= 365) {
                        day = 0 
                        ++year
                    }
                }
            }
        }
    }
}

function display() {
    increaseTime()
        time.textContent = (year > 9 ? year: '0' + year)
        + ':' + 
        (day > 9 ? day: '0' + day)
        + ':' + 
        (hrs > 9 ? hrs: '0' + hrs)
        + ':' + 
        (min > 9 ? min: '0' + min)
        + ':' + 
        (sec> 9 ? sec: '0' + sec)
        + '.' + 
        (mlsec> 9 ? mlsec: '0' + mlsec);
            timer()
} 

function timer() {
    t = setTimeout (display, 10)
}

// function disabled(){
//     timer.target.disabled = true
// }

// timer.target.disabled = true

start.addEventListener('click', () => timer())
// start.addEventListener('click', timer => {
//     timer.target.disabled = true}
// )
pause.addEventListener('click', () => {clearTimeout(t)} )
reset.addEventListener('click', () => { clearTimeout(t)
                                time.textContent = `00:00:00:00:00.00`
                            mlsec = 0
                        sec = 0
                    min = 0
                hrs = 0
            day = 0
        year = 0
    } 
)
    // start.onclick = timer
    // pause.onclick = () => { clearTimeout(t)}
    // reset.onclick = () => {
    //     clearTimeout(t)
    //     time.textContent = `00:00:00:00:00:00`
    //     mlsec = 0
    //     sec = 0
    //     min = 0
    //     hrs = 0
    //     day = 0
    //     year = 0
    // }