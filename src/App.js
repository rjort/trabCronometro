import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import LabelBottomNavigation from './components/LabelBottomNavigation';

import Clock from './pages/Clock';
import Chronometer from './pages/Chronometer';
import Timer from './pages/Timer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Clock/>
          </Route>
          <Route path="/chronometer">
            <Chronometer/>
          </Route>
          <Route path="/timer">
            <Timer/>
          </Route>
        </Switch>
        <LabelBottomNavigation/>
      </Router>
    </div>
  );
}
