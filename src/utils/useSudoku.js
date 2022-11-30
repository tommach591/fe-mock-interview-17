import { useCallback, useState } from "react";

function rowSafe(board, cell, num) {
  let r = cell[0];
  let row = board[r];

  return !row.includes(num);
}

function colSafe(board, cell, num) {
  let c = cell[1];
  let column = [];
  for (let i = 0; i < 9; i++) column.push(board[i][c]);

  return !column.includes(num);
}

function boxSafe(board, cell, num) {
  let r = cell[0];
  let c = cell[1];
  let box = [];

  for (let i = r >= 6 ? 6 : r >= 3 ? 3 : 0, m = i + 3; i < m; i++) {
    for (let j = c >= 6 ? 6 : c >= 3 ? 3 : 0, n = j + 3; j < n; j++) {
      box.push(board[i][j]);
    }
  }

  return !box.includes(num);
}

function isSafe(board, cell, num) {
  return (
    rowSafe(board, cell, num) &&
    colSafe(board, cell, num) &&
    boxSafe(board, cell, num)
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function getEmpty(board) {
  let emptyCell = [];

  board.forEach((row, rowIndex) => {
    if (emptyCell.length !== 0) return;
    let colIndex = row.indexOf(0);
    if (colIndex !== -1) emptyCell = [rowIndex, colIndex];
    else return;
  });

  if (emptyCell.length !== 0) return emptyCell;

  return false;
}

function generateBoard() {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let count = 0;

  while (count < 17) {
    let r = Math.floor(Math.random() * 9);
    let c = Math.floor(Math.random() * 9);

    while (board[r][c] !== 0) {
      r = Math.floor(Math.random() * 9);
      c = Math.floor(Math.random() * 9);
    }

    let num = Math.floor(Math.random() * 9) + 1;

    if (isSafe(board, [r, c], num)) {
      board[r][c] = num;
      count++;
    }
  }

  return board;
}

export function useSudoku() {
  const [puzzle, setPuzzle] = useState(generateBoard());

  const isValid = useCallback((board) => {
    if (getEmpty(board)) return false;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let num = board[i][j];
        board[i][j] = 0;
        if (!isSafe(board, [i, j], num)) return false;
        board[i][j] = num;
      }
    }

    return true;
  }, []);

  return [puzzle, isValid];
}
