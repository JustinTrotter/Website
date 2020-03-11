import React from "react"
import Home from "./home"
//import Game from './Pages/Game';

export default () => {
  return (
    <div className="App">
      <Home />
    </div>
  )

  /*return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/portfolio/:gameId">
            <Game/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );*/
}
