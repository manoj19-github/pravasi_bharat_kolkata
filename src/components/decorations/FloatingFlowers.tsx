import React, { useMemo } from 'react'

export const FloatingFlowers: React.FC = () => {
  // Generates randomized stable petal floating properties
  const petals = useMemo(() => {
    return Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      left: `${(i * 11 + 4) % 96}%`,
      animationDuration: `${14 + (i % 5) * 3}s`,
      animationDelay: `${(i * 1.8) % 10}s`,
      size: `${22 + (i % 4) * 6}px`,
      initialRotate: `${i * 45}deg`,
    }))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden select-none">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-40 animate-float"
          style={{
            left: petal.left,
            top: `${(petal.id * 12) % 80}%`,
            width: petal.size,
            height: petal.size,
            transform: `rotate(${petal.initialRotate})`,
          }}
        >
          {/* Subtle stylized flower petal vector */}
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#D94B12] drop-shadow-sm" fill="currentColor">
            <path
              d="M12 2C13.5 6 15 8.5 19 9C15 10.5 13.5 13 12 17C10.5 13 9 10.5 5 9C9 8.5 10.5 6 12 2Z"
              fill="#FAF0E6"
              stroke="#D94B12"
              strokeWidth="0.8"
            />
            <circle cx="12" cy="9" r="2" fill="#D94B12" />
          </svg>
        </div>
      ))}
    </div>
  )
}
