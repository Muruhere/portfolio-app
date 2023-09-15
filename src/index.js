import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Contact } from './components/Contact';
import Container from './components/Container';
import './index.css';
import { Layout } from './layout';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Container />,
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={Route} />
  </>
);
