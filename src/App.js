import React, {useState, cloneElement} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {light, dark} from './themes';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
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
          <Container maxWidth="md">
            <IconButton
              color="inherit"
              aria-label="mode"
              onClick={() => setTheme(!theme)}
            >
              {icon}
            </IconButton>
            <SwitchRoutes/>
          </Container>
          <Toolbar />
          <ElevationScroll>
            <LabelBottomNavigation/>
          </ElevationScroll>
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

function ElevationScroll(props) {
  const { children, window } = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
