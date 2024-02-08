import React, { Component} from "react";
import './App.css'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { EditSub, NavBar, NewSub, CreateSub, SubCard, SubCardCollection } from './ui-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubEdit from './SubEdit';

class App extends Component {
    render() {
      return (
        <div className="App"><header className="App-header">
          <Router>
            <Routes>
              <Route exact path="/" element={<div><NavBar class="nav2"/><SubCardCollection class="collection"/></div>}/>
              <Route exact path="/new" element={<div><NavBar class="nav3"/><CreateSub class="create"/></div>}/>
              <Route exact path="/edit/:cid" element={<SubEdit/>}/>
          </Routes>   
          </Router>
          
          </header></div>
      )
    }
}

export default withAuthenticator(App);

//https://github.com/CSNSE/subs5/issues