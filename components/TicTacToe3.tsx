import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Header from './Header.tsx'

const GameboardContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const WinStatus = styled.main`
  display: flex;
	align-self: center;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 45px;
  padding: 0rem 0.8rem;
  background: #FFFFFF;
  border: 2px solid rgba(#0000FF, 0.1);
  border-radius: 8px;
  font-size: 1rem;
`
const ResetButton = styled.button`
  color: aquamarine;
	cursor: pointer;
  background-color: transparent;
  border: 3px solid aquamarine;
  padding: 0.25em;
  font-size: 1.25em;
  text-transform: uppercase;	
`
const GameboardContainer = props => {
  const PLAYER_X = 'x'
  const PLAYER_Y = 'o'
	const initialPlayerOptionXorO = () => Math.random() >= 0.5 ? PLAYER_X : PLAYER_Y
  const [gameboardData, setGameboardData] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState(initialPlayerOptionXorO)
  const [gameWinner, setGameWinner] = useState(false)
  const equals3 = (a, b, c) => {
    if(a != null && b != null && c != null) {
      return (a == b && b == c && a != '')
    }
  }
	
	const handleClick = position => {
		if (gameboardData[position] != null)
			return

    const _squares = gameboardData
    _squares[position] = playerTurn
    setGameboardData(_squares)
    playerTurn === PLAYER_X ? setPlayerTurn(PLAYER_Y) : setPlayerTurn(PLAYER_X)
    const winner = handleWinner(_squares)
    if (winner) {
      setGameWinner(winner)
    }
  }

  const handleWinner = squares => {
    var winner = false
    //horizontal
    for (let i = 0; i < 3; i+=3) {
      if(equals3(squares[i], squares[i+1], squares[i+2])) {
        winner = squares[0]
      }
    }
    //vertical
    for (let i = 0; i < 3; i+=1) {
      if(equals3(squares[i], squares[i+3], squares[i+6])) {
        winner = squares[0]
      }
    }
    //diagonal
    if (equals3(squares[0], squares[4], squares[8])) {
      winner = squares[0]
    }
    if (equals3(squares[2], squares[4], squares[6])) {
      winner = squares[2]
    }
		if (squares.filter((x) => x === x))
    if (!winner && !squares.includes(null)) {
      return 'tie';
    } else {
      return winner;
    }
  }
	
	const resetButton = () => {
		setGameboardData(Array(9).fill(null))
		setGameWinner(false)
		setPlayerTurn(initialPlayerOptionXorO)
	}

  const squares = gameboardData
	return (
		<GameboardContainerWrapper>
			{gameWinner && <>
										 	<WinStatus>
												{gameWinner && `Winner: ${gameWinner.toUpperCase()}`}
											</WinStatus>
											<ResetButton onClick={() => resetButton()}>
												{`reset button`}
											</ResetButton>
											</>
			}
			{!gameWinner && <>
				<Header 
					resetButton={resetButton}	
					playerTurn={playerTurn} />
				<Gameboard	
					handleClick={handleClick}
					handleWinner={handleWinner}
					squares={squares}
					{...props} />
		</>}
		</GameboardContainerWrapper>
	)
}
const GameboardMain = styled.main`
  width: 40vw;
  height: 40vw;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-gap: 3px;
  background-color: aquamarine;
  grid-column: 2 / span 1;
`
const Gameboard = props => {
const { handleClick, handleWinner, squares } = props
  return (
    <GameboardMain>
    {squares && squares.map((playerMarker, index) => {
      return <GameSquare
                index={index}
                key={index}
                playerMarker={playerMarker}
                handleClick={handleClick}
      />
    })}
    </GameboardMain>
  )
}
const SquareDiv = styled.div`
  color: aquamarine;
  background-color: midnightblue;
  justify-content: center;
  align-items: center;
`
const GameSquare = ({ index, handleClick, playerMarker }) => {
  const onClick = (index) => {
    handleClick(index);
  }
  return (
    <SquareDiv onClick={() => onClick(index)} >
      <GameMarker type={playerMarker} />
    </SquareDiv>
  )
}
const GameMarkerDiv = styled.div`
  text-align: center;
  font-size: 10vw;
`
const GameMarker = ({ type }) => {
  const validTypes = ["x", "o"]

  if (!validTypes.includes(type)) {
    // TODO: handle error for invalid move marker type
		type = false
  }

  return (
    <GameMarkerDiv>{type}</GameMarkerDiv>
  )
}

export default GameboardContainer

