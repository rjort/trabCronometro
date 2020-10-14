import React, {useState, useEffect} from 'react';
import {dateTimeNowByTimeZone, differenceLocalByTimeZone} from '../componentsUtils';

import Typography from '@material-ui/core/Typography';


export default function TypographyClockDisplay({timeZone, align}) {
    const diffLocal = differenceLocalByTimeZone(timeZone);
    const textDiff = `${diffLocal === 1 || diffLocal === -1 ? diffLocal + ' hour' : diffLocal + ' hours'}`;

    const [time, setTime] = useState(dateTimeNowByTimeZone(timeZone).time);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dateTimeNowByTimeZone(timeZone).time);
        }, 100);
        
        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <>
            <Typography variant="body1" align={align} noWrap>{time}</Typography>
            <Typography variant="body2" align={align} noWrap>{textDiff}</Typography>
        </>
    );
}