import React, { useState, useRef, useEffect } from 'react';
import {decrementMillisecondsFromTime} from '../componentsUtils';

import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';
// import FlagIcon from '@material-ui/icons/Flag';

export default function TimerDisplay({seconds = 60}) {

  const [timeLeft, setTimeLeft] = useState('00:00');
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const decrement = useRef(null)

    const now = Date.now();
    const then = now + seconds * 1000;

    const countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft <= 0) {
            clearInterval(countDown);
            console.log('done!');
            console.log(countDown)
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);

    const displayTimeLeft = seconds => {
        let minutesLeft = Math.floor(seconds/60) ;
        let secondsLeft = seconds % 60;
        minutesLeft = minutesLeft.toString().length === 1 ? "0" + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft.toString().length === 1 ? "0" + secondsLeft : secondsLeft;
        return `${minutesLeft}:${secondsLeft}`;
    }

    useEffect(() => {
        setInterval(() => {
            setTimeLeft(displayTimeLeft(seconds));
        }, 1000);
    }, [seconds])


//
///*  const decrementTimer = useEffect(() => {
//    const decTimer = timer > 0 && setInterval(() => setTimer(timer - 1), 1000)
//    return () => clearInterval(decTimer)
//  }, [timer])
//*/
//
//  const decrementTimer = () => {
//    return setInterval(() => {
//      setTimer((timer) => decrementMillisecondsFromTime(timer))
//    }, 10)
//  }
//
  const handleStart = () => {
    setIsStarted(true)
    setIsPaused(true)
    decrement.current = countDown
  }

  const handlePause = () => {
    clearInterval(decrement.current)
    setIsPaused(false)
  }

  const handleReset = () => {
    clearInterval(decrement.current)
    setIsPaused(false)
    setIsStarted(false)
//    setTimer("00:00:60")
  }
//
  return(
    <div>
      <Typography variant="h1" noWrap>Countdown: {timeLeft}</Typography>
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
          </>
          :
          <Fab color="primary" variant="outlined" style={{margin: 2}} onClick={handleStart}>
            <PlayArrowIcon/>
          </Fab>
        )
      }
      <Fab  color="primary" variant="outlined" style={{margin: 2}} onClick={handleReset}>
        <ReplayIcon/>
      </Fab>
    </div>
  )
}