import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const SquareDiv = styled.div`
  color: aquamarine;
  background-color: midnightblue;
  justify-content: center;
  align-items: center;
`
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
  const PLAYER_X = 'x'
  const PLAYER_Y = 'o'
  const [gameboardData, setGameboardData] = useState([Array(9).fill(null)])
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X)

  const handleClick = position => {
    const _squares = gameboardData[0]
    _squares[position] = playerTurn
		setGameboardData([_squares])
		playerTurn === PLAYER_X ? setPlayerTurn(PLAYER_Y) : setPlayerTurn(PLAYER_X)
	}

	const squares = gameboardData[0];

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
const GameSquare = ({ index, handleClick, playerMarker }) => {
  const onClick = (index) => {
    handleClick(index);
  };
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
  const validTypes = ["x", "o"];

  if (!validTypes.includes(type)) {
    // TODO: handle error for invalid move marker type
  }

  return (
		<GameMarkerDiv>{type}</GameMarkerDiv>
	)
}

export default Gameboard
