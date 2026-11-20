import confetti from 'canvas-confetti'

export const triggerSparkles = () => {
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  }

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    })
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#6366f1', '#ec4899', '#06b6d4'],
  })

  fire(0.2, {
    spread: 60,
    colors: ['#3b82f6', '#10b981', '#f59e0b'],
  })

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    colors: ['#a855f7', '#6366f1'],
    scalar: 1.2,
  })

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}

export const triggerStarCannon = (e?: React.MouseEvent) => {
  const x = e ? e.clientX / window.innerWidth : 0.5
  const y = e ? e.clientY / window.innerHeight : 0.5

  confetti({
    particleCount: 80,
    angle: 60,
    spread: 55,
    origin: { x, y },
    colors: ['#60a5fa', '#34d399', '#f472b6', '#fbbf24'],
    zIndex: 9999,
  })
}
