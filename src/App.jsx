import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { ThemeProvider } from './components/Theme-Provider.jsx'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet />
      <Navbar />
    </ThemeProvider>
  )
}

export default App
