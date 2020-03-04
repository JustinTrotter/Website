import React from 'react';
import Navigation from '../Components/Navigation';
import { useParams } from "react-router-dom";

function Game() {
  const { gameId } = useParams();
  return (
    <>
      <Navigation/>
      <div style={{marginTop:"50px"}}>
        <h3 style={{color: "white"}}>Requested Game ID: {gameId}</h3>
      </div>
    </>
  );
}

export default Game;