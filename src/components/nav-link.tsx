import { Link, LinkProps } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  return (
    <Link
      className="flex h-16 items-center gap-1.5 border-b pl-5 text-sm font-medium  text-foreground hover:text-muted-foreground"
      {...props}
    />
  )
}
