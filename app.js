const time = document.querySelector('#time')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')
const circle = document.querySelector('#circle')


//akdjaljdlajdljaljdlasjdk
// lkd;ka;dk;alkd;ka;dka;lskd;askld
let mlsec = 0
let sec = 0
let min = 0
let hrs = 20
let day = 0
let year = 0
let t = null;

function increaseTime() {
    --mlsec
    if (mlsec <= 0) {
        mlsec = 99
        --sec
        if (sec <= 0) {
            sec = 59
            --min
            if (min <= 0) {
                min = 59
                --hrs
                if (hrs <= 0) {
                    hrs = 23
                    --day
                    if (day <= 0) {
                        day = 364
                        --year
                    }
                }
            }
        }
    }
}

function display() {
    increaseTime()
    time.textContent =
        (year > 9 ? year : '0' + year)
        + ':' +
        (day > 9 ? day : '0' + day)
        + ':' +
        (hrs > 9 ? hrs : '0' + hrs)
        + ':' +
        (min > 9 ? min : '0' + min)
        + ':' +
        (sec > 9 ? sec : '0' + sec)
        + '.' +
        (mlsec > 9 ? mlsec : '0' + mlsec);
}

function timer() {
    if (t == null) {
        t = setInterval(display, 10)
    }
}

function createScore() {
    const score = document.createElement('li')
    score.classList.add('score')
    score.id = ('aaa')
    ol.prepend(score)
    score.textContent =
        (year > 9 ? year : '0' + year)
        + ':' +
        (day > 9 ? day : '0' + day)
        + ':' +
        (hrs > 9 ? hrs : '0' + hrs)
        + ':' +
        (min > 9 ? min : '0' + min)
        + ':' +
        (sec > 9 ? sec : '0' + sec)
        + '.' +
        (mlsec > 9 ? mlsec : '0' + mlsec);
}

let ol = document.querySelector('#ol')
// let li = document.querySelector('#aaa')
function deleteLI() {
// все три метода работают
// 1    ol.innerHTML = ''

/*2*/    while (ol.firstChild) {
        ol.removeChild(ol.lastChild)
    }

    // 3    ol.querySelectorAll('*').forEach((n) => n.remove())
}

window.onload = () => {

    start.addEventListener('click', () => {
        timer()
        start.style.display = 'none'
        pause.style.display = 'block'
    })

    pause.addEventListener('click', () => {
        if (t != null) {
            clearInterval(t)
            t = null
            createScore()
        }
        pause.style.display = 'none'
        start.style.display = 'block'
    })

    circle.addEventListener('click', () => {
        if (t != null) {
            createScore()
        }
    })

    reset.addEventListener('click', () => {
        if (t != null) {
            clearInterval(t)
            t = null
        }
        time.textContent = `00:00:00:00:00.00`
        mlsec = 0
        sec = 0
        min = 0
        hrs = 0
        day = 0
        year = 0
        deleteLI()
        pause.style.display = 'none'
        start.style.display = 'block'
        console.log(reset);
    })
}
