export default function initGame() {

  function createGameboard() {
    const game = document.querySelector('.game');
    const board = document.createElement('div');
    board.classList.add('game-board');
    game.appendChild(board);
    const boardSize = 16;
    for (let i = 0; i < boardSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
  }
  createGameboard();

  const goblin = document.createElement('div');
  goblin.classList.add('goblin');
  const cells = Array.from(document.querySelectorAll('.cell'));

  if (cells.length < 2) {
    throw new Error('Need at least 2 cells to play the game');
  }

  function getRandomIndex(value) {
    const randomIndex = Math.floor(Math.random() * value);
    return randomIndex;
  }

  let currentIndex = getRandomIndex(cells.length);

  function moveGoblin() {
    let newIndex;
    do {
      newIndex = getRandomIndex(cells.length);
    } while (newIndex === currentIndex);    
    cells[currentIndex].innerHTML = '';
    cells[newIndex].appendChild(goblin);
    currentIndex = newIndex;
  }

  cells[currentIndex].appendChild(goblin);
  setInterval(moveGoblin, 1200);
}