/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let state = {
    bordem : 0,
    hunger : 0,
    sleepiness : 0,
}
let timer
let gameOver

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById('boredom-stat')
const hungerStatEl = document.getElementById('hunger-stat')
const sleepinessStatEl = document.getElementById('sleepiness-stat')
const playBtnEl = document.getElementById('play')
const feedBtnEl = document.getElementById('feed')
const sleepBtnEl = document.getElementById('sleep')
const gameMessageEl = document.getElementById('message')
const resetBtnEl = document.getElementById('restart')


/*-------------------------------- Functions --------------------------------*/
init()
gameOver = false
function init() {
    timer = setInterval(runGame, 2000)
}
function runGame() {
    updateStates()
    checkGameOver()
    render()
}
function render() {
    if (gameOver){
        timer.clearInterval()
    }
    boredomStatEl.textContent = state.bordem
    hungerStatEl.textContent = state.hunger
    sleepinessStatEl.textContent = state.sleepiness
}
function updateStates() {
    for (let key in state) {
        state[key] += Math.round(Math.random()*3)
    }
}
function checkGameOver() {
    if (state.bordem > 10 || state.hunger > 10 || state.sleepiness > 10){
        gameOver = true
    }
}

/*----------------------------- Event Listeners -----------------------------*/


