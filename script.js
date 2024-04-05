let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function handleClick(index) {
  if (!board[index]) {
    board[index] = currentPlayer;
    renderBoard();
    if (checkWinner(currentPlayer)) {
      document.getElementById('message').textContent = `${currentPlayer} wins!`;
      return;
    }
    if (board.every(cell => cell !== '')) {
      document.getElementById('message').textContent = "It's a draw!";
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner(player) {
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === player);
  });
}

function renderBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
}

function reset() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  renderBoard();
  document.getElementById('message').textContent = '';
}
