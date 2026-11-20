import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * High-speed visual progress bar at top of window that flashes smoothly on every navigation
 */
export const NavigationProgressBar: React.FC = () => {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setVisible(true)
    setProgress(25)

    const t1 = setTimeout(() => setProgress(70), 50)
    const t2 = setTimeout(() => setProgress(100), 160)
    const t3 = setTimeout(() => {
      setVisible(false)
      setProgress(0)
    }, 280)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [location.pathname])

  if (!visible && progress === 0) return null

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none overflow-hidden" 
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#BD1113] via-[#F59E0B] to-[#BD1113] shadow-[0_0_12px_rgba(189,17,19,0.85)]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? 'width 100ms ease-out, opacity 120ms ease-out' : 'width 140ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
    </div>
  )
}
