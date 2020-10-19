import React, { useState } from 'react';
import Board from '../Board/index';
import calculateWinner from '../CaculateWinner/index';

function handleClick(i, useGameState, useHistoryState) {
    const history = useHistoryState[0].slice(0, useGameState[0].stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = useGameState[0].xIsNext ? "X" : "O";
    useGameState[1]({
      ...useGameState[0],
      stepNumber: history.length,
      xIsNext: !useGameState[0].xIsNext
    });
    useHistoryState[1]([...history,
      {
        squares: squares
      }
    ]);
  }

  function jumpTo(step, useGameState) {
    useGameState[1]({
      ...useGameState[0],
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  function reverse(useGameState) {
    useGameState[1]({
      ...useGameState[0],
      isReverse : !useGameState[0].isReverse,
    })
  }
  
  function renderStep(step, atPos, useGameState, useHistoryState) {
    const history = useHistoryState[0].slice();
    var currentStepAtPosition = history[step].squares[atPos];
    if (step === useGameState[0].stepNumber)
    {
      return (
        <button className="cur-step">
          {currentStepAtPosition}
        </button>
      );
    }
    else
    {
      return (
        <button className="step">
          {currentStepAtPosition}
        </button>
      )
    }
  }

function Game () {
    const useGameState = useState({
        stepNumber: 0,
        xIsNext: true,
        isReverse: false
    });

    const useHistoryState = useState([
      {
        squares: Array(9).fill(null)
      }
    ]);
  
    const history = useHistoryState[0];
    const current = history[useGameState[0].stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => jumpTo(move, useGameState)}>{desc}</button>
          <div>
          <div className="step-row">
            {renderStep(move, 0, useGameState, useHistoryState)}
            {renderStep(move, 1, useGameState, useHistoryState)}
            {renderStep(move, 2, useGameState, useHistoryState)}
          </div>
          <div className="step-row">
            {renderStep(move, 3, useGameState, useHistoryState)}
            {renderStep(move, 4, useGameState, useHistoryState)}
            {renderStep(move, 5, useGameState, useHistoryState)}
          </div>
          <div className="step-row">
            {renderStep(move, 6, useGameState, useHistoryState)}
            {renderStep(move, 7, useGameState, useHistoryState)}
            {renderStep(move, 8, useGameState, useHistoryState)}
          </div>
          </div>
        </li>
      );
    });
    
    let status;
    const checkFull = current.squares.includes(null);
    if (checkFull === false) //đã full
    {
      if (winner === null)
      {
        status = "Draw match ! ";
      }
      else{
        status = "Winner: " + current.squares[winner[0]];
      }
    }
    else
    {
      if (winner) {
        status = "Winner: " + current.squares[winner[0]];
      } else {
        status = "Next player: " + (useGameState[0].xIsNext ? "X" : "O");
      }
    }

      let stylename;
        if (useGameState[0].isReverse === true)
        {
          stylename = {
            display : 'flex', 
            flexDirection: 'column-reverse',
          }
        }
        else {
          stylename = {
            display : 'flex', 
            flexDirection: 'column',
          }
        }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => handleClick(i, useGameState, useHistoryState)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <button className="btnReverse"
              onClick={() => reverse(useGameState)}>
                Reverse</button>
            <ol style={stylename}>{moves}</ol>
          </div>
        </div>
      );
    }

  export default Game;