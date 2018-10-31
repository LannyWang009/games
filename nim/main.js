// initial state
let gameState = {
  player: 'Player1',
  sum: 0,
  numberInput: null,
  greyNum: 16
}

function init () {
  gameState = {
    player: 'Player1',
    sum: 0,
    numberInput: null,
    greyNum: 16
  }
}

// build HTML and render

function buildTitle () {
  var title = document.getElementById('pebbleState')
  var greyNum = gameState.greyNum
  title.innerHTML = renderTitle(greyNum)
  function renderTitle (something) {
    return `<h4 class="title" id="pebbleState">There are ${something} pebbles left</h4>`
  }
}

function buildGreetingLine () {
  var playerTurn = gameState.player
  var playerGreetingLine = document.getElementById('playerState')
  playerGreetingLine.innerHTML = renderPlayerGreetingLine(playerTurn)

  function renderPlayerGreetingLine (something) {
    return `
    <h4 class="mt-5 player-state">It's ${something}'s turn! How many pebbles will you take?</h4>
    `
  }
}

function buildPebbleImage () {
  let playerTurn = gameState.player
  let colorId = gameState.sum
  let pebbleImage = document.getElementById(colorId)

  function renderPebbleImage (colorId, playerTurn) {
    if (playerTurn === 'Player1') {
      return `
      <div class="pebble" id=${colorId} style="background-color: yellow"></div>`
    } else {
      return `
      <div class="pebble" id=${colorId} style="background-color: green"></div>`
    }
  }
  pebbleImage.innerHTML = renderPebbleImage(colorId, playerTurn)
}

// switch player
function switchPlayer () {
  if (gameState.player === 'Player1') { gameState.player = 'Player2' } else if (gameState.player === 'Player2') { gameState.player = 'Player1' }
}

// game logic and event
function playGame () {
  var numberInput = parseInt(document.getElementById('takeInput').value)
  console.info(gameState.player + ' just took ' + numberInput + ' pebbles')

  gameState.sum += numberInput
  gameState.greyNum = gameState.greyNum - numberInput
  console.log('There are ' + gameState.greyNum + ' pebbles left. ' + gameState.sum + ' pebbles have been taken.')

  buildTitle()
  buildPebbleImage()
  switchPlayer()
  console.log('We just changed the player to ' + gameState.player)
  buildGreetingLine()
}

// //render the pebble image, change background color for the selected number of pebbles
// function renderPebbleImage (selectedValue, playerTurn) {
//   //change the pebble class css background-color by id

// }

// //render player-state banner
// function renderPlayerTurn (playerTurn) {
//   //show the current playerTurn
// }

// function renderGame(selectedValue, playerTurn) {
//   renderTitle(selectedValue);
//   renderPebbleImage(selectedValue,playerTurn);
//   renderPlayeTurn(playerTurn);
// }

// // ---
// // Event
// // ---
