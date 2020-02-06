import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Aboutus from './Pages/Aboutus';
import Shop from './Pages/Shop';
import Home from './Pages/Home';




function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Switch>
          <Route exact path= '/' component= {Home}/>
          <Route path='/aboutus' component= {Aboutus}/>
          <Route path= '/shop' component= {Shop}/>
        </Switch>
      </Router>
</div>
  );
}

export default App;
