import "./Sudoku.css";

function Sudoku({ board, puzzle, click }) {
  return (
    <div className="Sudoku">
      {board.map((row, i) => {
        return (
          <div className={i % 3 === 0 ? "Row Top" : "Row"} key={i}>
            {row.map((e, j) => {
              return puzzle[i][j] === 0 ? (
                <div
                  className={j % 3 === 0 ? "Box Red Left" : "Box Red"}
                  key={j}
                  onClick={() => {
                    click(i, j);
                  }}
                >
                  {e !== 0 ? e : ""}
                </div>
              ) : (
                <div className={j % 3 === 0 ? "Box Left" : "Box"} key={j}>
                  {e !== 0 ? e : ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Sudoku;
