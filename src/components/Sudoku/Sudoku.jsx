import "./Sudoku.css";

function Sudoku({ board }) {
  return (
    <div className="Sudoku">
      {board.map((row, i) => {
        return (
          <div className={i === 2 || i === 5 ? "Row Bottom" : "Row"} key={i}>
            {row.map((e, j) => {
              return (
                <div
                  className={j === 2 || j === 5 ? "Box Right" : "Box"}
                  key={j}
                >
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
