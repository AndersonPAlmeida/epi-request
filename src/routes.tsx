import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/appLayout'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Equipment } from './pages/app/equipment/equipment'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/items', element: <Equipment /> },
    ],
  },
])
