import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

import ListItemClockDisplay from '../ListItemClockDisplay';

export default function ListTimeZones({selectedTimeZones, onDelete}) {
    const handleDelete = (index) => {
        onDelete(index);
    };

    return (
        <div>
            <List>
                {selectedTimeZones.map((timeZone, index) => (
                    <div key={timeZone.id}>
                        <Divider/>
                        <ListItem>
                            <ListItemIcon>
                                <AccessTimeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={timeZone.label} secondary={timeZone.value}/>
                            <ListItemClockDisplay timeZone={timeZone.value}/>
                            <ListItemIcon onClick={() => handleDelete(index)}>
                                <DeleteIcon/>
                            </ListItemIcon>
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    );
}