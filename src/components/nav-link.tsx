import { Link, LinkProps } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  return (
    <Link
      className="flex h-16 items-center gap-1.5 pl-5 text-sm font-medium text-background hover:text-ring dark:text-foreground dark:hover:text-ring"
      {...props}
    />
  )
}
