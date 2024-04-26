import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { MenuNavigation } from '@/components/menu-navigation'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[200px_1fr]">
      <MenuNavigation />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
