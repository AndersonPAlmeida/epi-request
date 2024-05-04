import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/appLayout'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Equipment } from './pages/app/equipment/equipment'
import { Team } from './pages/app/team/team'
import { User } from './pages/app/user/user'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/equipament', element: <Equipment /> },
      { path: '/team', element: <Team /> },
      { path: '/user', element: <User /> },
    ],
  },
])
