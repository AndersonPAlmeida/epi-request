import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/appLayout'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Items } from './pages/app/items/items'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/items', element: <Items /> },
    ],
  },
])
