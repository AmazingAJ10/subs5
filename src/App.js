import React, { Component} from "react";
import './App.css'
import { withAuthenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { EditSub, NavBar, NewSub, SubCard, SubCardCollection } from './ui-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
    render() {
      return (
        <div className="App"><header className="App-header">
          <Router>
            <Routes>
              <Route exact path="/" element={<div><NavBar class="nav"/><SubCardCollection class="collection"/></div>}/>
              <Route exact path="/NewSub" element={<div><NavBar class="nav"/><NewSub/></div>}/>
              <Route exact path="/EditSub" element={<div><NavBar class="nav"/><EditSub/></div>}/>
          </Routes>    
          </Router>
          
          </header></div>
      )
    }
}

export default withAuthenticator(App);