import React, { useState } from "react";
import { Fragment } from "react";

const Square = ({ value }) => {
  return <button className="square">{value}</button>;
};

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <Fragment>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </Fragment>
  );
}
