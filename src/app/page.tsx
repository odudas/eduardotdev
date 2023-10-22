import { AboutMe } from '@/components/AboutMe'
import { Bootcamps } from '@/components/Bootcamps'

export default function Home() {
  return (
    <main className="w-1/2 py-20">
      <AboutMe />

      <Bootcamps />
    </main>
  )
}
