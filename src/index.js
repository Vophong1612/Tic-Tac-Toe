/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game/index';
import './index.css';
  
  // class Game extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       history: [
  //         {
  //           squares: Array(9).fill(null)
  //         }
  //       ],
  //       stepNumber: 0,
  //       xIsNext: true,
  //       isReverse: false
  //     };
  //   }
  
  //   handleClick(i) {
  //     const history = this.state.history.slice(0, this.state.stepNumber + 1);
  //     const current = history[history.length - 1];
  //     const squares = current.squares.slice();
  //     if (calculateWinner(squares) || squares[i]) {
  //       return;
  //     }
  //     squares[i] = this.state.xIsNext ? "X" : "O";
  //     this.setState({
  //       history: history.concat([
  //         {
  //           squares: squares
  //         }
  //       ]),
  //       stepNumber: history.length,
  //       xIsNext: !this.state.xIsNext
  //     });
  //   }
  
  //   jumpTo(step) {
  //     this.setState({
  //       stepNumber: step,
  //       xIsNext: (step % 2) === 0
  //     });
  //   }

  //   reverse() {
  //     this.setState({
  //       isReverse : !this.state.isReverse,
  //     });
  //   }
    
  //   renderStep(step, atPos) {
  //     const history = this.state.history.slice();
  //     var currentStepAtPosition = history[step].squares[atPos];
  //     if (step === this.state.stepNumber)
  //     {
  //       return (
  //         <button className="cur-step">
  //           {currentStepAtPosition}
  //         </button>
  //       );
  //     }
  //     else
  //     {
  //       return (
  //         <button className="step">
  //           {currentStepAtPosition}
  //         </button>
  //       )
  //     }
  //   }
  
  //   render() {
  //     const history = this.state.history;
  //     const current = history[this.state.stepNumber];
  //     const winner = calculateWinner(current.squares);

  //     const moves = history.map((step, move) => {
  //       const desc = move ?
  //         'Go to move #' + move :
  //         'Go to game start';

  //       return (
  //         <li key={move}>
  //           <button onClick={() => this.jumpTo(move)}>{desc}</button>
  //           <div>
  //           <div className="step-row">
  //             {this.renderStep(move, 0)}
  //             {this.renderStep(move, 1)}
  //             {this.renderStep(move, 2)}
  //           </div>
  //           <div className="step-row">
  //             {this.renderStep(move, 3)}
  //             {this.renderStep(move, 4)}
  //             {this.renderStep(move, 5)}
  //           </div>
  //           <div className="step-row">
  //             {this.renderStep(move, 6)}
  //             {this.renderStep(move, 7)}
  //             {this.renderStep(move, 8)}
  //           </div>
  //           </div>
  //         </li>
  //       );
  //     });
    
  //     let status;
  //     const checkFull = current.squares.includes(null);
  //     if (checkFull === false) //đã full
  //     {
  //       if (winner === null)
  //       {
  //         status = "Draw match ! ";
  //       }
  //       else{
  //         status = "Winner: " + current.squares[winner[0]];
  //       }
  //     }
  //     else
  //     {
  //       if (winner) {
  //         status = "Winner: " + current.squares[winner[0]];
  //       } else {
  //         status = "Next player: " + (this.state.xIsNext ? "X" : "O");
  //       }
  //     }

  //     let stylename;
  //       if (this.state.isReverse === true)
  //       {
  //         stylename = {
  //           display : 'flex', 
  //           flexDirection: 'column-reverse',
  //         }
  //       }
  //       else {
  //         stylename = {
  //           display : 'flex', 
  //           flexDirection: 'column',
  //         }
  //       }
  
  //     return (
  //       <div className="game">
  //         <div className="game-board">
  //           <Board
  //             squares={current.squares}
  //             onClick={i => this.handleClick(i)}
  //           />
  //         </div>
  //         <div className="game-info">
  //           <div>{status}</div>
  //           <button className="btnReverse"
  //             onClick={() => this.reverse()}>
  //               Reverse</button>
  //           <ol  style={stylename}>{moves}</ol>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  
  
  