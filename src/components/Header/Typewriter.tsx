'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

export function Typewriter() {
  const [text] = useTypewriter({
    words: [
      'Desenvolvedor Front-end',
      'Desenvolvedor Mobile',
      'Estudante de Sistemas de Informação',
    ],
    loop: true,
    delaySpeed: 2500,
  })

  return (
    <h2 className="mt-3 text-xl font-medium tracking-tight text-zinc-200">
      {text}
      <Cursor />
    </h2>
  )
}
