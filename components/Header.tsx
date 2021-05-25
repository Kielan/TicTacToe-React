import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	cursor: pointer;
  text-align: center;
  grid-column: 2 / span 1;
  margin-bottom: 5em;
`
const GameTitleH1 = styled.h1`
  margin-bottom: 1.5em;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const CurrentPlayer = styled.span`
  grid-column: 1;
  font-size: 1.5em;
  padding: 0.25em;
  place-self: center;
  border-bottom: 3px solid aquamarine;
  text-align: left;
  font-weight: normal;
`
const GameControlsSpan = styled.span`
  place-self: center;
`
export default function GameHeader({playerTurn, resetButton}) {
  return (
    <Header>
      <GameTitleH1>Tic-Tac-Toe</GameTitleH1>
      <Grid>
        {/*
        TODO: Set the current marker and player indicator to the real
        marker/player from the application state
        */}
        <CurrentPlayer>{playerTurn.toUpperCase()}'s Turn</CurrentPlayer>
        <GameControlsSpan>
          <GameControls resetButton={resetButton} />
        </GameControlsSpan>
      </Grid>
    </Header>
  );
}
const ResetButton = styled.button`
  color: aquamarine;
	cursor: pointer;
  background-color: transparent;
  border: 3px solid aquamarine;
  padding: 0.25em;
  font-size: 1.25em;
  text-transform: uppercase;
`

function GameControls({ resetButton }) {
  return (
    <>
      {/* TODO: implement handler so clicking this button resets the
      game state (board, current player, etc.) */}
      <ResetButton
        type="button"
        onClick={() => resetButton()}
      >
        Reset Game
      </ResetButton>
    </>
  );
}
