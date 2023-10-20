interface NavTabItemProps {
  title: string
  url?: string // TODO fix
}

export function NavTabItem({ url, title }: NavTabItemProps) {
  return (
    <li>
      <a href={url} className="group flex cursor-pointer items-center py-2">
        <span className="text-sm font-bold uppercase tracking-widest group-hover:text-slate-200">
          {title}
        </span>
      </a>
    </li>
  )
}
