// будет чередоваться между игроками 'X' и '0'
let currentPlayer = 'X'; 
// массив, представляющий нашу сетку 3 х 3 
let gameBoard = ['', '', '', '', '', '', '', '', ''];
// показывает, продолжается ли игра 
let gameActive = true;

function hendlePlayerTurn(clickedCellIndex) {
  // проверяем, пуста ли выбранная ячейка и активна ли игра  
  if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
    return;
  }
  // если true, то устанавливает символ текущего игрока и переключает ход
  gameBoard[clickedCellIndex] = currentPlayer; 
  currentPlayer = currentPlayer === 'X' ? '0' : 'X';
}

