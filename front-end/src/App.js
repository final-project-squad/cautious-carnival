import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/home/Home"
import "./App.css"

function App() {
  return (
    <Router>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/page-name">
        {/* <page-name /> */}
      </Route>

      <Route path="/about">
     {/*    <About /> */}
      </Route>
      
    </Router>
  )
}

export default App;

