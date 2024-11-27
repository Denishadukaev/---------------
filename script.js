const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const restartButton = document.getElementById('restartButton');

let turn = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleClick(event) {
    const cell = event.target;
    const index = Array.from(cells).indexOf(cell);

    if (boardState[index] !== '' || checkWin()) return;

    boardState[index] = turn;
    cell.textContent = turn;

    if (checkWin()) {
        setTimeout(() => alert($,{turn}, выиграл ), 10);
    } else if (boardState.every(cell => cell !== '')) {
        setTimeout(() => alert('Ничья!'), 10);
    } else {
        turn = turn === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

function restartGame() {
    boardState.fill('');
    cells.forEach(cell => {
        cell.textContent = '';
    });
    turn = 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

restartButton.addEventListener('click', restartGame);