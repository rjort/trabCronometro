import React, {useState, useEffect} from 'react';
import {dateTimeNowByTimeZone, differenceLocalByTimeZone} from '../componentsUtils';

import ListItemText from '@material-ui/core/ListItemText';

export default function ListItemClockDisplay({timeZone}) {
    const diffLocal = differenceLocalByTimeZone(timeZone);
    const textDiff = `
        Difference: 
        ${diffLocal === 1 || diffLocal === -1 ? diffLocal + ' hour' : diffLocal + ' hours'}
    `;

    const [time, setTime] = useState(dateTimeNowByTimeZone(timeZone).time);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dateTimeNowByTimeZone(timeZone).time);
        }, 100);
        
        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <ListItemText 
        primary={time} 
        secondary={textDiff}/>
    );
}