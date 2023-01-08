import { useContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext, CycleType } from '../../../contexts/CyclesContext'
import { StartButton, TimerWrapper } from './styles'

export function Countdown() {
  const {
    activeCycle,
    startNewCycle,
    markActiveCycleAsFinished,
    pauseActiveCycle,
    resumeActiveCycle,
    timeSettings,
  } = useContext(CyclesContext)
  const [secondsPassed, setSecondsPassed] = useState(0)
  const [isTimerPaused, setIsTimerPaused] = useState(true)
  const [cycleType] = useState<CycleType>('focus')

  const { focusDurationInSec } = timeSettings
  const hasActiveCycle = Object.keys(activeCycle).length !== 0

  useEffect(() => {
    let interval: number
    if (hasActiveCycle && !isTimerPaused) {
      const { secondsPassed, totalDurationInSec } = activeCycle
      interval = setInterval(() => {
        const differenceInSec = differenceInSeconds(
          new Date(),
          activeCycle.startedDate,
        )
        setSecondsPassed(differenceInSec)
        if (differenceInSec + secondsPassed >= totalDurationInSec) {
          markActiveCycleAsFinished()
          setSecondsPassed(0)
          clearInterval(interval)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, isTimerPaused, markActiveCycleAsFinished, hasActiveCycle])

  function toggleTimer() {
    if (!hasActiveCycle) {
      startNewCycle(cycleType)
      setIsTimerPaused(false)
    } else {
      if (!isTimerPaused) {
        pauseActiveCycle(secondsPassed)
        setSecondsPassed(0)
        setIsTimerPaused(true)
      } else {
        resumeActiveCycle()
        setIsTimerPaused(false)
      }
    }
  }

  const secondsLeft = hasActiveCycle
    ? focusDurationInSec - secondsPassed - activeCycle.secondsPassed
    : focusDurationInSec

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  const minutesToStr = String(minutes).padStart(2, '0')
  const secondsToStr = String(seconds).padStart(2, '0')

  useEffect(() => {
    document.title = `${minutesToStr}:${secondsToStr}`
  }, [minutesToStr, secondsToStr])

  return (
    <>
      <TimerWrapper>
        <strong>
          {minutesToStr}:{secondsToStr}
        </strong>
      </TimerWrapper>
      <StartButton hasStarted={true} onClick={toggleTimer}>
        Start
      </StartButton>
    </>
  )
}
