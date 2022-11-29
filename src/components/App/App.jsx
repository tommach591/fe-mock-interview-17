import { useEffect, useState } from "react";
import { useMobile } from "../../utils/useMobile";
import { useSudoku } from "../../utils/useSudoku";
import "./App.css";
import Sudoku from "../Sudoku";

function App() {
  const isMobile = useMobile();
  const [puzzle, answer] = useSudoku();
  const [board, setBoard] = useState(puzzle);
  const [solvedBoard, setSolvedBoard] = useState(answer);

  return (
    <div className="App">
      <h1 className="Title">My Sudoku</h1>
      <Sudoku board={board} />
    </div>
  );
}

export default App;
