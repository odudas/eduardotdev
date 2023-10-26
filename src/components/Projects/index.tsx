import { BootcampProjectCard } from '../BootcampProjectCard'

export function Projects() {
  return (
    <section id="bootcamps" className="mb-24 scroll-mt-24">
      <div></div>

      <div>
        <ul className="group/list">
          <li className="mb-12 transition-all hover:!opacity-100 group-hover/list:opacity-50">
            <BootcampProjectCard
              link="#"
              imageSrc={`/bootcamps/eduardotdev.png`}
              altText=""
              title="eduardotdev"
              description="Este projeto é o meu portifólio. Ele é uma carta de apresentação para possíveis recrutadores com uma coletânea de todos os meus projetos e experiências como dev, destacando as minhas principais habilidades."
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
