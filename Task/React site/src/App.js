import React from 'react';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/signup" component={Signup}  />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
