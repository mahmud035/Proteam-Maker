'use strict';

const players = [];

function addToCart(element) {
  const playerName =
    element.previousElementSibling.previousElementSibling.innerText;

  const playerObject = {
    name: playerName,
  };

  players.push(playerObject);

  //  players should not be selected more than 5.
  if (players.length > 5) {
    alert('You can only select 5 players');
    return;
  }

  displayPlayerName(players);
  // disabled button
  element.setAttribute('disabled', true);
  element.style.backgroundColor = 'green';
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

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// Add event listener to calculate button
document.getElementById('player-expenses').addEventListener('click', () => {
  const perPlayerExpense = getInputFieldValueById('player-expense');
  const numberOfPlayers = players.length;

  if (numberOfPlayers === 0) {
    alert('Please select at least one player');
    return;
  }

  // check if perPlayerExpenses is less than 0 or not a number
  if (perPlayerExpense <= 0 || isNaN(perPlayerExpense)) {
    alert('Please enter valid expense');
    return;
  }

  const playersTotalExpense = perPlayerExpense * numberOfPlayers;
  setElementValueById('player-total-expenses', playersTotalExpense);
});

// Add event listener to calculate total button
document.getElementById('calculate-total').addEventListener('click', () => {
  const playersTotalExpense = getElementValueById('player-total-expenses');
  const managerExpense = getInputFieldValueById('manager-expense');
  const coachExpense = getInputFieldValueById('coach-expense');

  // check if any of the expenses is less than 0 or not a number
  if (
    managerExpense <= 0 ||
    isNaN(managerExpense) ||
    coachExpense <= 0 ||
    isNaN(coachExpense)
  ) {
    alert('Please enter valid expense');
    return;
  }

  const totalExpense = playersTotalExpense + managerExpense + coachExpense;
  setElementValueById('total', totalExpense);
});
