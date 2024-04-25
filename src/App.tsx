import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="request-epi" defaultTheme="dark">
        <Helmet titleTemplate="%s | request-epi" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
