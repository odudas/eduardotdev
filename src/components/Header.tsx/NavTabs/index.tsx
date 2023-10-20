import { NavTabItem } from './NavTabItem'

export function NavTabs() {
  return (
    <nav>
      <ul className="mt-12 w-max">
        <NavTabItem title="Sobre Mim" />
        <NavTabItem title="Experiências" />
        <NavTabItem title="Projetos" />
        <NavTabItem title="Bootcamps" />
      </ul>
    </nav>
  )
}
