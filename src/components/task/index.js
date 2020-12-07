import {
  Box,
  Button,
  Container,
  Divider,
  LinearProgress,
  Slider,
  Typography
} from '@material-ui/core'
import React from 'react'

const Task = () => {
  const [duration, setDuration] = React.useState(10)
  const [elapsedTime, setElapsedTime] = React.useState(10)
  const handleChange = (event, newValue) => {
    setDuration(newValue)
  }
  const handleReset = () => {
    setElapsedTime(duration)
  }

  React.useEffect(
    () => {
      if (duration < elapsedTime) setElapsedTime(duration)
      if (elapsedTime < 0) setElapsedTime(duration)
      const timer = setInterval(
        () => {
          setElapsedTime(prev => prev - 1)
        },
        [1000]
      )
      return () => clearInterval(timer)
    },
    [duration, elapsedTime]
  )

  return (
    <Container>
      <Box minHeight={600}>
        <Typography variant='h5' color='primary' align='center'>
          Timer
        </Typography>
        <Divider />
        <Box height={24} />
        <LinearProgress
          value={elapsedTime / duration * 100}
          variant='determinate'
        />
        <Box height={24} />
        <Typography variant='h4' align='center'>
          {`${elapsedTime}s`}
        </Typography>
        <Box height={24} />
        <Slider
          value={duration}
          onChange={handleChange}
          aria-labelledby='continuous-slider'
          valueLabelDisplay='auto'
        />
        <Box height={24} />
        <Button
          fullWidth
          size='large'
          variant='outlined'
          color='primary'
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </Container>
  )
}

export default Task
