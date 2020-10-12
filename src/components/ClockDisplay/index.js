import React, { useEffect, useState } from 'react';
import {dateTimeNow} from '../componentsUtils';

import Typography from '@material-ui/core/Typography';

export default function ClockDisplay() {
    const startMoment = dateTimeNow();

    const [date, setDate] = useState(startMoment.date);
    const [time, setTime] = useState(startMoment.time);

    useEffect(() => {
        const interval = setInterval(() => {
            const changeMoment = dateTimeNow();

            setDate(changeMoment.date);
            setTime(changeMoment.time);
        }, 1);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Typography variant="h1" noWrap>{time}</Typography>
            <Typography variant="subtitle1" noWrap>Date: {date}</Typography>
        </div>
    );
}