import { BootcampCard } from './BootcampCard'

export function Bootcamps() {
  return (
    <section id="bootcamps" className="mb-24 scroll-mt-24">
      <div></div>

      <div>
        <ul className="group/list">
          <li className="mb-12 transition-all hover:!opacity-100 group-hover/list:opacity-50">
            <BootcampCard
              link="#"
              imageSrc={`/bootcamps/nlw.png`}
              altText=""
              title="Next Level Week"
              description="É um evento, dividido em duas trilhas, sendo uma iniciante e outra avaçada. Oferecendo uma oportunidade única para aprimorar os conhecimentos em desenvolvimento web, por meio de uma experiência prática, com desafios e utilizando as tecnologias mais utilizadas pelo mercado."
            />
          </li>
          <li className="mb-12 transition-all hover:!opacity-100 group-hover/list:opacity-50">
            <BootcampCard
              link="#"
              imageSrc={`/bootcamps/ignite-reactjs.png`}
              altText=""
              title="Rocketseat Ignite React.Js"
              description="Esta é a trilha de especialização em React.Js. Durante esta jornada desenvolvemos 6 projetos, junto com o instrutor, Diego Fernandes, e realizei 6 desafios práticos, apenas aproveitando o layout do Figma desenvolvido pela Rocketseat."
              technologies={[
                'React.js',
                'Next.Js',
                'TypeScript',
                'TailwindCSS',
                'Styled-Components',
                'Design System',
                'Storybook',
              ]}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
