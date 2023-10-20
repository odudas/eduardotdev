interface LinkProps {
  url?: string // TODO fix me
  name: string
}

export function Link({ url, name }: LinkProps) {
  return (
    <a
      href={url}
      className="cursor-pointer font-medium text-blue-300 hover:text-blue-100"
    >
      {name}
    </a>
  )
}
