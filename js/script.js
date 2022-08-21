'use strict';

const players = [];

function addToCart(element) {
  const playerName =
    element.previousElementSibling.previousElementSibling.innerText;

  const playerObject = {
    name: playerName,
  };

  players.push(playerObject);
  displayPlayerName(players);
}

function displayPlayerName() {
  const playerNameContainer = document.getElementById(
    'selected-player-container'
  );
  playerNameContainer.innerHTML = '';

  for (const player of players) {
    const li = document.createElement('li');
    li.classList.add('ms-4');
    li.style.fontSize = '1.5rem';
    li.innerHTML = player.name;
    playerNameContainer.appendChild(li);
  }
}
