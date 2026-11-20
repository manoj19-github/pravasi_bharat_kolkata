import { useState, useEffect } from 'react'
import { Calendar, Clock, Timer, Hourglass } from 'lucide-react'

interface CountdownProps {
  targetDate: string
}

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  hasStarted: boolean
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [time, setTime] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasStarted: false,
  })

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, hasStarted: true })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTime({ days, hours, minutes, seconds, hasStarted: false })
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeBlocks = [
    { 
      label: 'DAYS', 
      value: time.days, 
      icon: Calendar, 
      color: 'text-[#B84A23]', 
      bg: 'bg-[#FFF7ED]', 
      border: 'border-[#FED7AA]' 
    },
    { 
      label: 'HOURS', 
      value: time.hours, 
      icon: Clock, 
      color: 'text-[#D97706]', 
      bg: 'bg-[#FFFBEB]', 
      border: 'border-[#FDE68A]' 
    },
    { 
      label: 'MINS', 
      value: time.minutes, 
      icon: Timer, 
      color: 'text-[#0284C7]', 
      bg: 'bg-[#F0F9FF]', 
      border: 'border-[#BAE6FD]' 
    },
    { 
      label: 'SECS', 
      value: time.seconds, 
      icon: Hourglass, 
      color: 'text-[#DC2626]', 
      bg: 'bg-[#FEF2F2]', 
      border: 'border-[#FECACA]' 
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
      {timeBlocks.map((block) => {
        const Icon = block.icon
        return (
          <div
            key={block.label}
            className={`flex flex-col items-center justify-center rounded-xl border ${block.border} ${block.bg} py-2.5 sm:py-3 px-1 shadow-xs transition-transform hover:scale-102`}
          >
            <div className="flex items-center gap-1 mb-0.5">
              <Icon className={`h-3 w-3 ${block.color} hidden sm:block`} />
              <span className={`block font-display text-xl sm:text-2xl font-black ${block.color} leading-none tracking-tight`}>
                {String(block.value).padStart(2, '0')}
              </span>
            </div>
            <span className="block text-[9px] sm:text-[10px] font-extrabold tracking-wider text-[#4A3E39]">
              {block.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
