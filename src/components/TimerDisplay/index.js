import React, {useState, useRef} from 'react'

import {decrementSecondsFromTime} from '../componentsUtils'
import sound from '../../sounds/alert.mp3'
import InputMask from 'react-input-mask'

import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import ReplayIcon from '@material-ui/icons/Replay'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'

export default function TimerDisplay() {
  const [timer, setTimer] = useState('00:00:00')
  const [text, setText] = useState('00:00:00')
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [alert, setAlert] = useState(false)
  const decrement = useRef(null)
  const audio = useRef(new Audio(sound))

  const decrementTimer = () => {
    return setInterval(() => {
      setTimer((prevTimer) => {
        if(prevTimer === '00:00:00'){
          clearInterval(decrement.current)
          setIsPaused(false)
          setIsStarted(false)
          setAlert(true)
          audio.current.play()
          return prevTimer
        } else {
          return decrementSecondsFromTime(prevTimer)
        }
      })
    }, 1000)
  }

  const handleStart = () => {
    setIsStarted(true)
    setIsPaused(true)
    handleClose()
    decrement.current = decrementTimer()
  }

  const handlePause = () => {
    clearInterval(decrement.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    decrement.current = decrementTimer()
  }

  const handleReset = () => {
    clearInterval(decrement.current)
    setIsStarted(false)
    setIsPaused(false)
    setTimer(text)
    handleClose()
  }

  const handleClose = () => {
    audio.current.pause()
    audio.current.currentTimecurrentTime = 0
    setAlert(false)
  }

  return (
    <div>
      {
      alert &&
      <Alert onClose={ handleClose }>
        Timeout!
      </Alert>
      }
      <InputMask
        mask="99:99:99"
        maskChar="0"
        value={text}
        onChange={value => setText(value.target.value)}
        onBlur={() => setTimer(text)}
      >
        {() => <TextField label="Time" type="text" margin="dense"/>}
      </InputMask>
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
    </div>
  )
}