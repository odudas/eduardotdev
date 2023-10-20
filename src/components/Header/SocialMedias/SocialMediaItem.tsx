import { ElementType } from 'react'

interface SocialMediaItemProps {
  icon: ElementType
  alt: string
  url?: string // TODO fix
}

export function SocialMediaItem({
  icon: Icon,
  alt,
  url,
}: SocialMediaItemProps) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-zinc-300 hover:text-zinc-100"
      >
        <span className="sr-only">{alt}</span>
        <Icon className="h-8 w-8" />
      </a>
    </li>
  )
}
