import { Link } from './Link'

export function AboutMe() {
  return (
    <section className="">
      <p className="mb-4">
        Quando ganhei meu primeiro notebook, em 2011, descobri o incrível mundo
        da tecnologia, na época assistia a vídeos de programação com Visual
        Basic. No momento em que eu tive vontade de criar sites, me deparei com
        soluções simples, como algumas plataformas onde já vem tudo pronto. Foi
        o desejo de personalizar estes templates padrões que me despertou a
        curiosidade para o desenvolvimento web.
      </p>

      <p className="mb-4">
        Meu maior objetivo é conquistar a minha primeira vaga como desenvolvedor
        Front-End. Mas enquanto o sonho não se realiza permaneço estudando,
        atualmente na <Link name="Rocketseat" /> e na <Link name="Alura" />, e
        desenvolvendo projetos pessoais para aplicar na prática os estudos.
      </p>

      <p className="">
        Nas horas vagas, gosto de escutar músicas, amo{' '}
        <Link name="Justin Bieber" />, mas ouço qualquer gênero musical. Gosto
        de assistir à filmes e séries, comumente de ação e investigativas e
        principalmente reunir os amigos no Discord para jogar competitivamente.
      </p>
    </section>
  )
}
