import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'projects',
          element: <Work />,
        },
        {
          path: 'projects/:id',
          element: <ProjectDetail />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'team',
          element: <Team />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]
)

function App() {
  
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
