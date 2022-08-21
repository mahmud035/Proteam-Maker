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

function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// Add event listener to calculate button
document.getElementById('player-expenses').addEventListener('click', () => {
  const perPlayerExpense = getInputFieldValueById('player-expense');
  const numberOfPlayers = players.length;

  const playersTotalExpense = perPlayerExpense * numberOfPlayers;
  setElementValueById('player-total-expenses', playersTotalExpense);
});
