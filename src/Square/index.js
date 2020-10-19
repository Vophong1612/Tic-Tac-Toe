import React from 'react';

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

export default Square;