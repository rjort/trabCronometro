import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {light} from './themes';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LabelBottomNavigation from './components/LabelBottomNavigation';

import Clock from './pages/Clock';
import Chronometer from './pages/Chronometer';
import Timer from './pages/Timer';
import NotFound from './pages/NotFound';

const theme = responsiveFontSizes(createMuiTheme(light));

export default function App() {
  return (
    <div className="App" style={{textAlign: "center"}}>
      <Router>
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm">
            <Switch>
              <Route exact path="/" component={Clock}/>
              <Route path="/chronometer" component={Chronometer}/>
              <Route path="/timer" component={Timer}/>
              <Route component={NotFound}/>
            </Switch>
          </Container>
          <LabelBottomNavigation/>
        </ThemeProvider>
      </Router>
    </div>
  );
}
