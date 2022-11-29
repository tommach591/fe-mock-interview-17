const emptyBoard = [
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

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(array) {}

const rowSafe = (puzzleArray, emptyCell, num) => {};
const colSafe = (puzzleArray, emptyCell, num) => {};

const boxSafe = (puzzleArray, emptyCell, num) => {};

export function useSudoku() {
  const puzzle = [...emptyBoard];
  const answer = [...emptyBoard];

  return [puzzle, answer];
}
