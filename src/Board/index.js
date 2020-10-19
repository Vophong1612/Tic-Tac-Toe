import React from 'react';
import Square from '../Square/index';
import calculateWinner from '../CaculateWinner/index';

function renderSquare(i, props) 
{
    const winner = calculateWinner(props.squares);
    let isWinSquare;
    if (winner != null)
    {
        isWinSquare = (winner[0] === i || winner[1] === i 
            || winner[2] === i) ? true : false ;
    }
    else{
        isWinSquare = false ;
    }
    return (
        <Square
          isWinSquare={isWinSquare}
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
        />
      );
  };

function createBoard(n, props)
    {
        const items = [];
        for (let i =0; i < n; i++)
        {
            let row = [];
            for (let j = 0; j < n; j++)
            {
                row.push(renderSquare(i*n + j, props));
            }
            items.push(
                <div className="board-row" key={i}>
                    {row}
                </div>
            )
        }
        return items;
    }

function Board (props) 
{
    const board = createBoard(3, props);
    return (
        <div>
            {board}
        </div>
    )
}

export default Board;