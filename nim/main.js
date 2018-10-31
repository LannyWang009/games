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
  let initialPebbleImage = document.getElementById('pebble-container')
  if (gameState.sum === 0) {
    initialPebbleImage.innerHTML = renderinitial()
  } else {
    pebbleImage.innerHTML = renderPebbleImage(colorId, playerTurn) 
  }


  function renderPebbleImage (colorId, playerTurn) {
      if (playerTurn === 'Player1') {
      return `
      <div class="pebble" id=${colorId} style="background-color: yellow"></div>`
      } else {
      return `
      <div class="pebble" id=${colorId} style="background-color: yellowgreen"></div>`
      } 

    }

  function renderinitial () {
    return `
    
      <div class="pebble" id=1 style="background-color:grey"></div>
      <div class="pebble" id=2 style="background-color:grey"></div>
      <div class="pebble" id=3 style="background-color:grey"></div>
      <div class="pebble" id=4 style="background-color:grey"></div>
      <div class="pebble" id=5 style="background-color:grey"></div>
      <div class="pebble" id=6 style="background-color:grey"></div>
      <div class="pebble" id=7 style="background-color:grey"></div>
      <div class="pebble" id=8 style="background-color:grey"></div>
      <div class="pebble" id=9 style="background-color:grey"></div>
      <div class="pebble" id=10 style="background-color:grey"></div>
      <div class="pebble" id=11 style="background-color:grey"></div>
      <div class="pebble" id=12 style="background-color:grey"></div>
      <div class="pebble" id=13 style="background-color:grey"></div>
      <div class="pebble" id=14 style="background-color:grey"></div>
      <div class="pebble" id=15 style="background-color:grey"></div>
      <div class="pebble" id=16 style="background-color:grey"></div>
    
    `
  }
  
  


}

function buildOption () {
  var option = document.getElementById('takeInput')
  var optionValue = gameState.greyNum
  option.innerHTML = renderOption(optionValue)

  function renderOption(optionValue) {
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
  if (gameState.player === 'Player1') { gameState.player = 'Player2' } 
  else if (gameState.player === 'Player2') { gameState.player = 'Player1' }
}

//check winner

function checkWinner (x) {
  if (x === 16) {
    document.getElementById('msg').innerHTML = `
    <h3 id="msg">${gameState.player} has won the game.</h3>
    `
    init();
  } else {
    document.getElementById('msg').innerHTML = ` <div id='msg'></div> `
  }
  
}

// game logic and event
function playGame () {
  var numberInput = parseInt(document.getElementById('takeInput').value)
  console.info(gameState.player + ' just took ' + numberInput + ' pebbles')
  gameState.sum += numberInput
  gameState.greyNum = gameState.greyNum - numberInput
  console.log('There are ' + gameState.greyNum + ' pebbles left. ' + 
  gameState.sum + ' pebbles have been taken.')

  checkWinner(gameState.sum)
  buildTitle()
  buildPebbleImage()
  switchPlayer()
  buildGreetingLine()
  buildOption()
 
  
  
  
}
