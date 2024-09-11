import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import { Skills } from './pages/Skills.jsx'
import About from './components/About.jsx'
import path from 'path'
import ProjectDetails from './pages/ProjectDetails.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
        children: [
          {
            path: 'react',
            element: <Projects />,
          },
          {
            path: 'express',
            element: <Projects />,
          },
          {
            path: 'next',
            element: <Projects />,
          },
          {
            path: 'vanilla',
            element: <Projects />,
          }
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/project/:id',
        element: <ProjectDetails />,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
