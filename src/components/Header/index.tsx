import { NavTabs } from './NavTabs'
import { SocialMedias } from './SocialMedias'

export function Header() {
  return (
    <header className="sticky flex min-h-screen w-1/2 flex-col justify-between py-16">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-zinc-200">
          Eduardo Tavares
        </h1>
        <h2 className="mt-3 text-xl font-medium tracking-tight text-zinc-200">
          Desenvolvedor Front-end
        </h2>
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
