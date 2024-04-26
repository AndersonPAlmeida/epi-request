import { HardHat, Home } from 'lucide-react'

import { NavLink } from './nav-link'

export function MenuNavigation() {
  return (
    <div className="border-r">
      <nav className="flex flex-col ">
        <NavLink to="/">
          <HardHat className="h-6 w-6" />
          Request Epi
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
