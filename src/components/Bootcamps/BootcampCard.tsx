'use client'

import { FiExternalLink } from 'react-icons/fi'

import Image from 'next/image'

import { TechnologieFlag } from '../TechnologieFlag'

interface BootcampCardProps {
  title: string
  description: string
  imageSrc: string
  altText: string
  link: string
  technologies: string[]
}

export function BootcampCard({
  title,
  description,
  imageSrc,
  altText,
  link,
  technologies,
}: BootcampCardProps) {
  function handleCardLink() {
    window.open(link, '_blank')
  }

  return (
    <div
      onClick={handleCardLink}
      className="group relative grid cursor-pointer grid-cols-8 gap-4 pb-1 transition-all"
    >
      <div className="absolute -inset-x-6 -inset-y-6 z-0 block rounded-md transition group-hover:bg-zinc-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(250,250,250,0.1)] group-hover:drop-shadow-lg" />

      <div className="z-10 order-2 col-span-6">
        <h3>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-blue-100"
          >
            <span>
              {title}
              <span className="inline-block">
                <FiExternalLink className="ml-1 h-4 w-4" />
              </span>
            </span>
          </a>
        </h3>
        <p className="text-sm leading-normal">{description}</p>
        <ul className="mt-1 flex flex-wrap">
          {technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <TechnologieFlag name={tech} />
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 col-span-2">
        <Image
          src={imageSrc}
          alt={altText}
          width={200}
          height={48}
          loading="lazy"
          decoding="async"
          className="rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/20"
        />
      </div>
    </div>
  )
}
