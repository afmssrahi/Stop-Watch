const stopWatchCounterStart = document.getElementById('start');
const stopWatchCounterReset = document.getElementById('reset');
const stopWatchCounterPause = document.getElementById('pause');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

let min;
let sec = 0;
let timer = null;

function start() {
    timer = setInterval(function() {
        sec++;
        let {min, s} = getTime(sec);

        minute.textContent = (min < 10) ? ('0' + min) : min;
        second.textContent = (s < 10) ? ('0' + s) : s;
    }, 1000)
}

function reset() {
    clearInterval(timer);
    min = 0;
    sec= 0;

    minute.textContent = '00';
    second.textContent = '00';
}

function pause() {
    clearInterval(timer);
}

function getTime(sec) {
    min = parseInt(sec / 60);
    let s = parseInt(sec % 60);

    return {
        min,
        s
    }
}

stopWatchCounterStart.addEventListener('click', start);
stopWatchCounterReset.addEventListener('click', reset);
stopWatchCounterPause.addEventListener('click', pause);