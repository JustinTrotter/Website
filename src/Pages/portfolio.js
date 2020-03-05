import React from "react"
import Navigation from "../components/navigation"
//import { useParams } from "react-router-dom";

function Game() {
  //const { gameId } = useParams();
  const gameId = "temp"
  return (
    <>
      <Navigation />
      <div style={{ marginTop: "50px" }}>
        <h3 style={{ color: "white" }}>Requested Game ID: {gameId}</h3>
      </div>
    </>
  )
}

export default Game
