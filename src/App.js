import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {light, dark} from './themes';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import LabelBottomNavigation from './components/LabelBottomNavigation';

import Clock from './pages/Clock';
import Chronometer from './pages/Chronometer';
import Timer from './pages/Timer';
import NotFound from './pages/NotFound';

export default function App() {
  const [theme, setTheme] = useState(false);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = responsiveFontSizes(createMuiTheme(theme ? light : dark));

  return (
    <div className="App" style={{textAlign: "center"}}>
      <Router>
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
          <Container maxWidth="sm">
            <IconButton
              color="inherit"
              aria-label="mode"
              onClick={() => setTheme(!theme)}
            >
              {icon}
            </IconButton>
            <SwitchRoutes/>
          </Container>
          <LabelBottomNavigation/>
        </ThemeProvider>
      </Router>
    </div>
  );
}

function SwitchRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Clock}/>
      <Route path="/chronometer" component={Chronometer}/>
      <Route path="/timer" component={Timer}/>
      <Route component={NotFound}/>
    </Switch>
  );
}
