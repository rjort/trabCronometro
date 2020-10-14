import React, {useState, useRef} from 'react';
import {incrementMillisecondsFromTime} from '../componentsUtils';

import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';
import FlagIcon from '@material-ui/icons/Flag';

import TableChronometer from '../TableChronometer';

export default function ChronometerDisplay() {
    const [timer, setTimer] = useState("00:00:00");
    const [isStarted, setIsStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [markedTimes, setMarkedTimes] = useState([]);
    const increment = useRef(null);

    const incrementTimer = () => {
        return setInterval(() => {
            setTimer((timer) => incrementMillisecondsFromTime(timer));
        }, 10);
    };

    const handleStart = () => {
        setIsStarted(true);
        setIsPaused(true);
        increment.current = incrementTimer();
    };

    const handlePause = () => {
        clearInterval(increment.current);
        setIsPaused(false);
    };

    const handleResume = () => {
        setIsPaused(true);
        increment.current = incrementTimer();
    };

    const handleReset = () => {
        clearInterval(increment.current);
        setIsStarted(false);
        setIsPaused(false);
        setTimer("00:00:00");
        setMarkedTimes([]);
    };

    const handleMark = (markedTime) => {
        setMarkedTimes((prevState) => {
            const data = prevState;
            data.push(timer);
            return data;
        });
    };

    return (
        <div>
            <Typography variant="h1" noWrap>{timer}</Typography>
            {
                !isStarted && !isPaused ?
                <Fab color="primary" variant="outlined" style={{margin: 2}} onClick={handleStart}>
                    <PlayArrowIcon/>
                </Fab>
                : (
                    isPaused ? 
                    <>
                        <Fab color="primary" variant="outlined" style={{margin: 2}} onClick={handlePause}>
                            <PauseIcon/>
                        </Fab> 
                        <Fab color="primary" variant="outlined" style={{margin: 2}} onClick={handleMark}>
                            <FlagIcon/>
                        </Fab>
                    </>
                    : 
                    <Fab color="primary" variant="outlined" style={{margin: 2}} onClick={handleResume}>
                        <PlayArrowIcon/>
                    </Fab> 
                )
            }
            <Fab color="primary" variant="outlined" style={{margin: 2}} onClick={handleReset}>
                <ReplayIcon/>
            </Fab>
            <TableChronometer markedTimes={markedTimes}/>
        </div>
    );
}