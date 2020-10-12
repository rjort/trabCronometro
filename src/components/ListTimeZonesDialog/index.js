import React from 'react';
import timeZones from '../../timeZones';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function ListTimeZonesDialog({selectedValue, open, onClose}) {
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (timeZone) => {
      onClose(timeZone);
    };
  
    return (
      <div>
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title">Select the time zone</DialogTitle>
          <List>
            {timeZones.map((timeZone) => (
              <div key={timeZone.id}>
                <Divider/>
                <ListItem button onClick={() => handleListItemClick(timeZone)}>
                  <ListItemText primary={timeZone.label}/>
                </ListItem>
              </div>
            ))}
          </List>
        </Dialog>
      </div>
    );
}