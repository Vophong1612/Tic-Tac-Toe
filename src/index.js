/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    if (props.isWinSquare)
    {
      return (
        <button className="win-square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
    else
    {
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      const winner = calculateWinner(this.props.squares);
      if (winner != null)
      {
      return (
        <Square
          isWinSquare={(winner[0] === i || winner[1] === i 
            || winner[2] === i) ? true : false} 
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
      }
      else{
        return (
          <Square
            isWinSquare={false}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
    }
  
    render() {
      const items = [];

      for (let index = 0; index < 9; index += 3) {
        const indexPlusOne = index + 1;
        const indexPlusTwo = index + 2;
        items.push(<div className="board-row">
          {this.renderSquare(index)}
          {this.renderSquare(indexPlusOne)}
          {this.renderSquare(indexPlusTwo)}
        </div>);
      }

      return (
      <div>
        {items}
      </div>
      )
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
    
    renderStep(step, atPos) {
      const history = this.state.history.slice();
      var currentStepAtPosition = history[step].squares[atPos];
      if (step === this.state.stepNumber)
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
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
            <div>
          <div className="step-row">
            {this.renderStep(move, 0)}
            {this.renderStep(move, 1)}
            {this.renderStep(move, 2)}
          </div>
          <div className="step-row">
            {this.renderStep(move, 3)}
            {this.renderStep(move, 4)}
            {this.renderStep(move, 5)}
          </div>
          <div className="step-row">
            {this.renderStep(move, 6)}
            {this.renderStep(move, 7)}
            {this.renderStep(move, 8)}
          </div>
        </div>
          </li>
        );
      });
    
      let status;
      const checkFull = current.squares.includes(null);
      if (checkFull === false)
      {
        if (winner === null)
        {
          status = "Draw match ! ";
        }
      }
      else
      {
        if (winner) {
          status = "Winner: " + current.squares[winner[0]];
        } else {
          status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c];
      }
    }
    return null;
  }
  