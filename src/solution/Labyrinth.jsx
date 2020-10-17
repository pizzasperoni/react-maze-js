import React, { useState, useEffect, useRef } from 'react';


export const Labyrinth = ({ availableCells, moveLimit, startingPosition, targetPosition }) => {
  const [currentPosition, setCurrentPosition] = useState(startingPosition)
  const [movesLeft, setMovesLeft] = useState(moveLimit)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)
  const gridRef = useRef(null)

  const isEmpty = ([x, y]) => {
    return availableCells[y] !== undefined && availableCells[y][x] !== 0 && availableCells[y][x] !== undefined
  }

  useEffect(()=>{
    if(gameOver) {
      setMovesLeft(0)
    }
  },[gameOver, gridRef])

  const handleKeyDown = ({key}) => {
    let targetPos = currentPosition;
    let isArrowKey = false;
    switch (key) {
      case 'ArrowUp':
        targetPos = [currentPosition[0],currentPosition[1] -1]
        isArrowKey = true
        break;
      case 'ArrowDown':
        targetPos = [currentPosition[0],currentPosition[1] +1]
        isArrowKey = true
        break;
      case 'ArrowLeft':
        targetPos = [currentPosition[0]-1, currentPosition[1]]
        isArrowKey = true
        break;
    	case 'ArrowRight':
        targetPos = [currentPosition[0] + 1, currentPosition[1]]
        isArrowKey = true
      	break;
        
      default:
        isArrowKey = false
      	break;
    }

    if (isEmpty(targetPos) && movesLeft !== 0 && isArrowKey) {
      setMovesLeft(movesLeft - 1)
      setCurrentPosition(targetPos)
      if (targetPos[0] === targetPosition[0] && targetPos[1] === targetPosition[1]){
        setWin(true)
        setGameOver(true)
      }

    }else if(movesLeft === 0){
      setGameOver(true)
    }
  }

  return (
    <div className='wrapper'>
      <h1>Labyrinth</h1>
      <ul>
        <li>Moves left: {movesLeft}</li>
      </ul>
      <div className='grid' onKeyDown={e => handleKeyDown(e)} tabIndex='0' autoFocus>
        {
          availableCells.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => (
              <span className={`cell ${(cell === 1) ? 'cell' : 'wall' } ${currentPosition[0] === cellIndex && currentPosition[1] === rowIndex && cell !== 0 ? 'player' : null } ${targetPosition[0] === cellIndex && targetPosition[1] === rowIndex ? 'finish' : null} `} key={cellIndex} ></span>
            ))
          })
        }
      </div>
      <div>
        {
          gameOver && (
            <h3 data-testid='game-message' className={`${win ? 'won' : 'lose'}`}>{win ? 'you win': 'you loose'}</h3>
          )
        }
      </div>
    </div>
  )
}
