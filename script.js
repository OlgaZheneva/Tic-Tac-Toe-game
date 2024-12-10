// инициализация состояния игры

// будет чередоваться между игроками 'X' и '0'
let currentPlayer = 'X'; 
// массив, представляющий нашу сетку 3 х 3 
let gameBoard = ['', '', '', '', '', '', '', '', ''];
// показывает, продолжается ли игра 
let gameActive = true;

// обработка ходов игроков

function hendlePlayerTurn(clickedCellIndex) {
  // проверяем, пуста ли выбранная ячейка и активна ли игра  
  if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
    return;
  }
  // если true, то устанавливает символ текущего игрока и переключает ход
  gameBoard[clickedCellIndex] = currentPlayer; 
  currentPlayer = currentPlayer === 'X' ? '0' : 'X';
}

// управление взаимодействием с игроками 

// добавляем слушателя событий к каждой ячейке игрового поля 
// сначала выберем все элементы ячеек
const cell = document.querySelectorAll('.cell');

// теперь добавляем слушателя событий к каждой ячейке. Этот слушатель будет вызывать функцию cellClicked при клике на ячейку
cells.forEach(cell => {
  cell.addEventListener('click', cellClicked, false);
})

//  обработка кликов по ячейкам 
// Создадим функцию cellClicked для обработки логики при клике на ячейку. Она проверит индекс ячейки, обновит состояние игры и обновит интерфейс

  function cellClicked(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.id.replace('cell', '')) -1; 

    if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
      return;
    }
    handlePlayerTurn(clickedCellIndex);
    updateUI();
  }

  // В этой функции мы:

// Получаем ID ячейки, по которой кликнул игрок.
// Проверяем, не занята ли уже ячейка и активна ли игра.
// Вызываем handlePlayerTurn для обновления состояния игры и updateUI для отображения изменений на доске.


// обновление пользовательского интерфейса 

// Напишем функцию updateUI. Эта функция обновляет каждую ячейку соответствующим значением из массива gameBoard, отображая X и O на доске. 

function updateUI() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText  = gameBoard[i];
  }
}

// Реализация условия победы 

// Выигрышные комбинации 
const winConditions = [
  [0, 1, 2], // Верхний ряд
  [3, 4, 5], // Средний ряд
  [6, 7, 8], // Нижний ряд
  [0, 3, 6], // Левый столбец
  [1, 4, 7], // Средний столбец
  [2, 5, 8], // Правый столбец
  [0, 4, 8], // Диагональ слева направо
  [2, 4, 6]  // Диагональ справа налево
]; 


// Проверка на победу или ничью 
function checkForWinOrDraw() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          roundWon = true;
          break;
      }
  }

  if (roundWon) {
      announceWinner(currentPlayer);
      gameActive = false;
      return;
  }

  let roundDraw = !gameBoard.includes('');
  if (roundDraw) {
      announceDraw();
      gameActive = false;
      return;
  }
}

// В этой функции мы:

// Проверяем каждое условие победы на наличие выигрышной комбинации у текущего игрока.
// Объявляем победителя, если найдена выигрышная комбинация.
// Проверяем на ничью, если не осталось свободных ячеек и нет победителя.

function checkForWinOrDraw() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          roundWon = true;
          break;
      }
  }

  if (roundWon) {
      announceWinner(currentPlayer);
      gameActive = false;
      return;
  }

  let roundDraw = !gameBoard.includes('');
  if (roundDraw) {
      announceDraw();
      gameActive = false;
      return;
  }
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  cells.forEach(cell => {
      cell.innerText = '';
  });
  document.getElementById('gameMessage').innerText = '';
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame, false);

    

