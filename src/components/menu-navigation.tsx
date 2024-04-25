import { Home } from 'lucide-react'

import { NavLink } from './nav-link'

export function MenuNavigation() {
  return (
    <div className="border-r">
      <nav className="flex flex-col ">
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>
      </nav>
    </div>
  )
}
