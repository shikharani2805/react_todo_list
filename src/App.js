import React from "react"
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap'
import './App.css';

function App() {

  return(
  
    <div className = "App">
      <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/About"> About</Nav.Link>
          <Nav.Link href="/Contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>

          <Route path="/About">
          
            <About/>
        
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </Switch>  
        
      </Router>

      

    <footer className="footer">
      <p>shikha.rani@teqfocus.com</p>
    </footer>
  

    </div>
  )
}


export default App
