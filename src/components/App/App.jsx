import { useState } from "react";
import { useSudoku } from "../../utils/useSudoku";
import "./App.css";
import Sudoku from "../Sudoku";
import Button from "../Button";

function App() {
  const [puzzle, isValid] = useSudoku();
  const [board, setBoard] = useState(JSON.parse(JSON.stringify(puzzle)));
  const [solved, setSolved] = useState(0);

  function click(i, j) {
    if (puzzle[i][j] === 0) {
      let newBoard = [...board];
      if (newBoard[i][j] === 9) {
        newBoard[i][j] = 0;
      } else {
        newBoard[i][j]++;
      }
      setBoard(newBoard);
    }

    console.log(puzzle);
  }

  function submit() {
    if (isValid(board)) setSolved(1);
    else setSolved(-1);
  }

  return (
    <div className="App">
      <h1 className="Title">My Sudoku</h1>
      <Sudoku board={board} puzzle={puzzle} click={click} />
      <Button doSomething={submit}>Submit</Button>
      {solved !== 0 ? (
        solved === 1 ? (
          <div className="Finished">
            <div
              className="Close"
              onClick={() => {
                setSolved(0);
              }}
            >
              x
            </div>
            Congratz! Refresh to restart the game!
          </div>
        ) : (
          <div className="Finished">
            <div
              className="Close"
              onClick={() => {
                setSolved(0);
              }}
            >
              x
            </div>
            Wrong! Refresh to restart the game!
          </div>
        )
      ) : (
        <div />
      )}
    </div>
  );
}

export default App;
