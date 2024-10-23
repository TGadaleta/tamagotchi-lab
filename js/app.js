/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom : 0,
    hunger : 0,
    sleepiness : 0,
}
let timer
let gameOver = false

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
function init() {
    for (let key in state) {
        state[key] = 0
    }
    gameOver = false
    console.log(state)
    gameMessageEl.setAttribute('class', 'hidden')
    resetBtnEl.setAttribute('class', 'hidden')
    timer = setInterval(runGame, 2000)
}
function runGame() {
    updateStates()
    checkGameOver()
    render()
}
function render() {
    if (gameOver){
        clearInterval(timer)
        gameMessageEl.classList.remove('hidden')
        resetBtnEl.classList.remove('hidden')
    }
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepinessStatEl.textContent = state.sleepiness
}
function updateStates() {
    for (let key in state) {
        state[key] += Math.round(Math.random()*3)
    }
}
function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10){
        gameOver = true
    }
}
function playBtnClick() {
    state.boredom = 0
    render()
}
function feedBtnClick() {
    state.hunger = 0
    render()
}
function sleepBtnClick() {
    state.sleepiness = 0
    render()
}
/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)
resetBtnEl.addEventListener('click', init)