import { NavTabs } from './NavTabs'
import { SocialMedias } from './SocialMedias'
import { Typewriter } from './Typewriter'

export function Header() {
  return (
    <header className="sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-20">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-zinc-200">
          Eduardo Tavares
        </h1>
        <Typewriter />
        <p className="mt-4 max-w-xs leading-normal">
          Crio aplicações web responsivas e acessíveis, visando a experiência de
          usuário.
        </p>

        <NavTabs />
      </div>

      <SocialMedias />
    </header>
  )
}
