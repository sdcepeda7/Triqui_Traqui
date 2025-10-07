"use client";

import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-9 h-9 text-xl font-bold border-2 border-neutral-800 text-center leading-9 bg-white hover:bg-gray-300 transition"
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  let status;
  if (winner) {
    status = `Ganador!!! 😎: ${winner}`;
  } else if (isDraw) {
    status = "Empate!!! 😪";
  } else {
    status = `Siguente jugador: ${xIsNext ? "X" : "O"}`;
  }
  

  return (
    <div>
      <div className="mb-2 font-medium">{status}</div>
      <div className="space-y-0.5">
        <div className="flex space-x-0.5">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex space-x-0.5">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex space-x-0.5">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    const description = move ? `Ir a movimiento #${move}` : "Iniciar juego";
    return (
      <li key={move} className="mb-1">
        <button
          onClick={() => jumpTo(move)}
          className="px-3 py-1 text-sm border border-black-400 rounded hover:bg-gray-300 transition"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-row items-start gap-10 p-6">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info p-4 min-w-[200px]">
        <ol className="list-decimal list-outside pl-3">{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
