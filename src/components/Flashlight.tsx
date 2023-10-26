'use client'

import { useEffect, useState } from 'react'

export function Flashlight() {
  const [cursorX, setCursorX] = useState('50vw')
  const [cursorY, setCursorY] = useState('50vh')

  useEffect(() => {
    const update = (e: MouseEvent) => {
      const x = e.pageX
      const y = e.pageY

      setCursorX(x + 'px')
      setCursorY(y + 'px')
    }

    document.addEventListener('mousemove', update)

    return () => {
      document.removeEventListener('mousemove', update)
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(500px at ${cursorX} ${cursorY}, rgba(88, 150, 198, 0.15), transparent 80%)`,
      }}
    ></div>
  )
}
