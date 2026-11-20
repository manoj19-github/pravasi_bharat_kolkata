import React from 'react'

export const AlpanaBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30 select-none">
      {/* Top right large decorative Alpana mandala */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full animate-spin-slow opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#D94B12]" fill="currentColor">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#D94B12" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#63240F" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="#D94B12" strokeWidth="1" />
          {/* Petals */}
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              d="M100,20 C108,50 115,70 100,100 C85,70 92,50 100,20 Z"
              fill="#F5E7DA"
              stroke="#D94B12"
              strokeWidth="0.8"
              transform={`rotate(${i * 22.5} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="28" fill="#FAF5EF" stroke="#63240F" strokeWidth="2" />
          <circle cx="100" cy="100" r="12" fill="#D94B12" />
        </svg>
      </div>

      {/* Bottom left gentle Alpana element */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full animate-spin-slow opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#63240F]" fill="currentColor">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#63240F" strokeWidth="1" strokeDasharray="4,4" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="#D94B12" strokeWidth="1" />
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d="M100,30 C110,60 110,80 100,100 C90,80 90,60 100,30 Z"
              fill="#F5E7DA"
              stroke="#63240F"
              strokeWidth="0.8"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="18" fill="#D94B12" opacity="0.6" />
        </svg>
      </div>
    </div>
  )
}
