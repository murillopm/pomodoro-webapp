import { createContext, ReactNode, useState } from 'react'

type Task = {
  id: string
  description: string
}

export type CycleType = 'focus' | 'break' | 'long-break'

type Cycle = {
  type: CycleType
  startedDate: Date
  totalDurationInSec: number
  secondsPassed: number
  isCompleted: boolean
  finishedDate?: Date
  task?: Task
}

type TimeSettings = {
  focusDurationInSec: number
  shortBreakDurationInSec: number
  longBreakDurationInSec: number
  focusRounds: number
}

interface CyclesContextData {
  activeCycle: Cycle
  cycles: Cycle[]
  timeSettings: TimeSettings
  startNewCycle: (type: CycleType) => void
  pauseActiveCycle: (secondsPassed: number) => void
  resumeActiveCycle: () => void
  markActiveCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [activeCycle, setActiveCycle] = useState({} as Cycle)
  const [completedCycles, setCompletedCycles] = useState<Cycle[]>([])
  const [timeSettings] = useState<TimeSettings>({
    focusDurationInSec: 5,
    shortBreakDurationInSec: 3,
    longBreakDurationInSec: 5,
    focusRounds: 2,
  })

  const [focusRoundsCounter, setFocusRoundsCounter] = useState(0)

  function startNewCycle(type: CycleType) {
    setActiveCycle({
      type,
      startedDate: new Date(),
      isCompleted: false,
      secondsPassed: 0,
      totalDurationInSec: timeSettings.focusDurationInSec,
    })
  }

  console.log(completedCycles, focusRoundsCounter)

  function markActiveCycleAsFinished() {
    setCompletedCycles((state) => {
      const completedCycle: Cycle = {
        ...activeCycle,
        finishedDate: new Date(),
        secondsPassed: activeCycle.totalDurationInSec,
        isCompleted: true,
      }
      return [...state, completedCycle]
    })
    setFocusRoundsCounter((state) => {
      if (state + 1 === timeSettings.focusRounds) {
        console.log('acabou')
        return 0
      }
      return state + 1
    })
    setActiveCycle({} as Cycle)
  }

  function pauseActiveCycle(secondsPassed: number) {
    setActiveCycle((state) => {
      return {
        ...state,
        secondsPassed: state.secondsPassed + secondsPassed,
      }
    })
  }

  function resumeActiveCycle() {
    setActiveCycle((state) => {
      return {
        ...state,
        startedDate: new Date(),
      }
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        cycles: [],
        startNewCycle,
        markActiveCycleAsFinished,
        pauseActiveCycle,
        resumeActiveCycle,
        timeSettings,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
