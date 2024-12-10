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