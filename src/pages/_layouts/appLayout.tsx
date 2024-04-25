import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { MenuNavigation } from '@/components/menu-navigation'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="grid min-h-[calc(100vh_-_65px)] grid-cols-[200px_1fr]">
        <MenuNavigation />
        <Outlet />
      </div>
    </div>
  )
}
