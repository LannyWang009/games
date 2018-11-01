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
  let initialPebbleImage = document.getElementById('pebble-container')
  var numberInput = parseInt(document.getElementById('takeInput').value)
  var y = gameState.sum - numberInput + 1

  function color () {
    if (gameState.player === 'Player1') {
      return 'yellow'
    } else {
      return 'yellowgreen'
    }
  }

  if (gameState.sum === 0) {
    initialPebbleImage.innerHTML = renderinitial()
  } else {
    if (numberInput === 1) {
      document.getElementById(y).style.backgroundColor = color()
    } else if (numberInput === 2) {
      document.getElementById(y).style.backgroundColor = color()
      document.getElementById(y + 1).style.backgroundColor = color()
    } else if (numberInput === 3) {
      document.getElementById(y).style.backgroundColor = color()
      document.getElementById(y + 1).style.backgroundColor = color()
      document.getElementById(y + 2).style.backgroundColor = color()
    }
  }
}



function renderinitial () {
  return `
    
      <div class="pebble" id='1'></div>
      <div class="pebble" id='2'></div>
      <div class="pebble" id='3'></div>
      <div class="pebble" id='4'></div>
      <div class="pebble" id='5'></div>
      <div class="pebble" id='6'></div>
      <div class="pebble" id='7'></div>
      <div class="pebble" id='8'></div>
      <div class="pebble" id='9'></div>
      <div class="pebble" id='10'></div>
      <div class="pebble" id='11'></div>
      <div class="pebble" id='12'></div>
      <div class="pebble" id='13'></div>
      <div class="pebble" id='14'></div>
      <div class="pebble" id='15'></div>
      <div class="pebble" id='16'></div>
    
    `
}

function buildOption () {
  var option = document.getElementById('takeInput')
  var optionValue = gameState.greyNum
  option.innerHTML = renderOption(optionValue)

  function renderOption (optionValue) {
    if (optionValue === 1) {
      return `
    <select id="takeInput">
        <option value='1'>1</option>
    </select>
    `
    } else if (optionValue === 2) {
      return `
      <select id="takeInput">
        <option value='1'>1</option>
        <option value='2'>2</option>
    </select>
      `
    } else {
      return `
      <select id="takeInput">
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      `
    }
  }
}

// switch player
function switchPlayer () {
  if (gameState.player === 'Player1') { gameState.player = 'Player2' } else if (gameState.player === 'Player2') { gameState.player = 'Player1' }
}

// check winner

function checkWinner (x) {
  if (x === 16) {
    document.getElementById('msg').innerHTML = `
    <h3 class="mt-3 container text-info bg-light text-center"id="msg">${gameState.player} has lost.</h3>
    <h3 class="mt-3 container bg-warning text-light text-center"> Click Take for New Game </h1>
    `
    init()
  } else {
    document.getElementById('msg').innerHTML = ` <div id='msg'></div> `
  }
}

// game logic and event
function playGame () {
  var numberInput = parseInt(document.getElementById('takeInput').value)
  // console.info(gameState.player + ' just took ' + numberInput + ' pebbles')
  gameState.sum += numberInput
  gameState.greyNum = gameState.greyNum - numberInput
  gameState.numberInput = numberInput
  // console.log('There are ' + gameState.greyNum + ' pebbles left. ' +
  // gameState.sum + ' pebbles have been taken.')

  checkWinner(gameState.sum)
  buildTitle()
  buildPebbleImage()
  switchPlayer()
  buildGreetingLine()
  buildOption()
}
