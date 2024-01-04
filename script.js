let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        const cellElement = document.getElementById('board').children[index];
        cellElement.innerText = currentPlayer;
        cellElement.classList.add(currentPlayer); 
        if (checkWin()) {
            document.getElementById('result').innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('result').innerText = 'It\'s a tie!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('result').innerText = '';
    Array.from(document.getElementById('board').children).forEach(cell => {
        cell.innerText = '';
    });
}
