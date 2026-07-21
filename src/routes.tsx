import type { RouteRecord } from 'vite-react-ssg';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ServiceAreas from './pages/ServiceAreas';
import About from './pages/About';
import Contact from './pages/Contact';

// The page set is contractual: Home, Products, Service Areas, About, Contact.
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'service-areas', element: <ServiceAreas /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];
