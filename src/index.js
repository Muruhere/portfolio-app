import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Contact } from './components/Contact/Contact';
import Container from './components/Container';
import './index.css';
import { Layout } from './layout';
import { Resume } from './components/Resume';

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
  },
  {
    path: '/resume',
    element: <Resume />
  }]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={Route} />
  </>
);
