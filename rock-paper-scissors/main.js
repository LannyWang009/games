// ---------
// Util 
// ---------

function byId (id) {
    return document.getElementById(id)
}

function deepCopy (x) {
    return JSON.parse(JSON.stringify(x))
}

function idtoString(id) {
    if (id === 1) {
        return 'ROCK'
    } else if (id === 2) {
        return `PAPER`
    } else if (id === 3) {
        return `SCISSORS`
    } else {console.error('btn id invalid') }
}


// --------
// HTML
// --------
    // Change this render function to use the "game" parameter

    // return `
    //     <div class="container d-flex flex-column justify-content-start align-items-center">
    //         <h4>Choose your weapon:</h4>
    //         <div class="w-50 text-center">
    //             <button class="btn btn-primary" id=1>Rock</button>
    //             <button class="btn btn-primary" id=2>Paper</button>
    //             <button class="btn btn-primary" id=3>Scissors</button>
    //         </div>
    //         <div class="d-flex justify-content-center">
    //             <div class="m-5">You played: <b>ROCK</b></div>
    //             <div class="m-5">The computer played: <b>SCISSORS</b></div>
    //         </div>
    //         <h1 class="text-center">You win!</h1>
    //     </div>
    // `

function buildGame(gameState) {

}

// -------------
// Rendering 
// -------------
let containerEl = null

let renderCount = 0

//converts theGame state into HTML and puts it into the DOM
function renderGame () {
    renderCount++
    console.info('Rendering game now - #' + renderCount)
    containerEl.innerHTML = buildGame(gameState)
}

// -----------
// Event
// -----------

function clickContainer (evt) {
    const targetEl = evt.target

    //defensive
    if (!targetEl) return

    if (targetEl.classList.contains('btn')) {
        const elId = targetEl.byId
        const idWithoutBtnString = elId.replace('btn', '')
        const btnNumber = parseInt(idWithoutBtnString, 10)
        console.info("just clicked btnID " + btnNumber)
        playGame(btnNumber);
    }
}

function addEvents () {
    console.info('adding DOM events')
    containerEl.addEventsListener('click', clickContainer)
}
// --------------
// Init 
// --------------

function init () {
    console.info('Initializing rock-paper-scissors')
    containerEl = byId('container')
    addEvents()
    renderGame()
}

document.addEventListener('DOMContentLoaded', init)