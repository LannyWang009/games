
// ------------
// Util-
// ------------
function byId (id) {
    return document.getElementById(id)
}

function deepCopy (x) {
    return JSON.parse(JSON.stringify(x))
}

//-------------
// Game state + logic
// ---------

function takePebbles (player, selectedValue) {
    return 
}

//winning logic
//tie logic
//returns an initial game state
var theNim = newGameState();

function resetGame () {
    theNim = newGameState()
    renderGame()
}

function taketurn (player, selectedValue) {
    //defensive
    
    //get the value of form selection

    //switch player

    //check if there is a winner

    renderGame();
}

// -------------
// HTML
// -------------

function buildTitle(selectedValue,sumValue) {
    if (selectedValue === null) {
        selectedValue = 0
    }
    if (sumValue === null) {
        sumValue === 0
    }
        
    return `<div class="container d-flex flex-column justify-content-start align-items-center">
        <h4>There are ${16-sumValue} pebbles left</h4>`
}

function buildImage () {
    return `
    <div class="w-50 text-center pebble-container">
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
    `
}

function buildPlayerTurn (player) {
    <h4 class="mt-5">It's ${playerTurn}'s turn! How many pebbles will you take?</h4>
}

function buildForm () {
    return `
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary">Take</button>
            </div>
        </div>
        `
}

function buildGameOverBanner (msg, alertClass) {
    return `
    <div class="banner-wrapper turn-warpper">
       <div class="alert ${alertClass} role="alert">
         <h2 class=""alert-heading">${msg}</h2>
         <button class="btn btn-primary" id=resetGameBtn>New Game</button>
        </div>
    </div>
    
    `
}

function buildGame () {
    let html= '<h1 class=display-3>NIM</h1>'

    if (game.winner === 'tie') {
        html += buildGameOverBanner('Tie game!', 'alert-dark')
    } else if (game.winner && game.winner.player === 'Player1') {
        html += buildGameOverBanner('Player 1 Wins!', 'alert-success')
    } else if (game.winner && game.winner.player === 'Player2') {
        html += buildGameOverBanner('Player 2 Wins!', 'alert-primary')
    } else {
        html += buildPlayerTurn(game.playerTurn)
    }
}
var content = document.getElementById('content');
content.innerHTML = renderGame(theNim);




function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are 16 pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
            <h4 class="mt-5">It's player 1's turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary">Take</button>
            </div>
        </div>
    `
}