import { AboutMe } from '@/components/AboutMe'
import { Projects } from '@/components/Projects'
import { Bootcamps } from '@/components/Bootcamps'

export default function Home() {
  return (
    <main className="w-1/2 py-20">
      <AboutMe />

      <Projects />

      <Bootcamps />
    </main>
  )
}
