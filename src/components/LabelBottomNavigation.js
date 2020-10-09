import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles({
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('clock');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.stickToBottom}>
      <BottomNavigationAction label="Clock" value="clock" component={Link} to="/" icon={<AccessTimeIcon />} />
      <BottomNavigationAction label="Chronometer" value="chronometer" component={Link} to="/chronometer" icon={<AccessAlarmIcon />} />
      <BottomNavigationAction label="Timer" value="timer" component={Link} to="/timer" icon={<TimerIcon />} />
    </BottomNavigation>
  );
}
